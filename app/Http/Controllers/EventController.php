<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventCreationWrapperResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventWrapperResource;
use App\Http\Resources\MainResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Http;

use App\Models\Payment;
use App\Models\Event;
use App\Models\Organizer;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use SimpleSoftwareIO\QrCode\Generator;
use stdClass;

class EventController extends Controller
{

    public function store(Request $request)
    {
        //TODO: $request validation

        $clientReference = Str::ulid()->toBase32();
        $userToken = Str::ulid()->toBase58();

        //                $event->background_color = $request->background_color;
//                $event->text_color = $request->text_color;
//                $event->primary_color = $request->primary_color;
//                $event->secondary_color = $request->secondary_color;

        $validator = Validator::make($request->all(), [
            'user.name' => 'required|string',
            'user.email' => 'required|string',
            'user.phone_number' => 'required|string',
            'event.name' => 'required|string',
            'event.description' => 'required|string',
            'event.slug' => 'required|unique:event,slug|string',
            'event.theme_color' => 'required|string',
            'event.background_color' => 'required|string',
            'event.category' => 'required|string',
            'event.text_color' => 'required|string',
            'event.primary_typeface' => 'required|string',
            'event.secondary_typeface' => 'required|string',
            'event.date' => 'required|string',
            'lineups.*.title' => 'required|string',
//            'lineups.*.description' => 'required|string',
            'lineups.*.start_time' => 'required|string',
            'lineups.*.end_time' => 'required|string'
        ]);

        if (!$validator->fails()) {
            //TODO: Payment - Abstract this
            $response = Http::withToken(env('PAYSTACK_SECRET_KEY'))
                ->post(env('PAYSTACK_PAYMENT_URL'), [
                    'amount' => (1 * env('PAYMENT_DOLLAR_RATE')),
                    'email' => $request->user['email'],
                    'callback_url' => env('PAYSTACK_PAYMENT_CALLBACK_URL') . "?referenceId=" . $clientReference,
                    'reference' => $clientReference
                ]);

            $deserialisedResponse = json_decode($response->body());


            if ($response->successful()) {
                $user = new Organizer;

                //Creating User
                if ($user->where('email', $request->user['email'])->first() == null) {
                    $user->email = $request->user['email'];
                    $user->name = $request->user['name'];
                    $user->phone_number = $request->user['phone_number'];
                    $user->token = $userToken;

                    //
                    $user->save();
                    $userId = $user->id;
                } else {
                    $user = $user->where('email', $request->user['email'])->first();
                    $userId = $user->id;
                }


                //Event & LineUps Creation
                $events = Event::create(
                    [
                        "event_name" => $request->event['name'],
                        "user_id" => $userId,
                        "event_description" => $request->event['description'],
                        "slug" => Str::slug($request->event['slug'], '-'),
                        "event_theme_color" => $request->event['theme_color'],
                        "category" => $request->event['category'],
//                        "event_image_id" => $request->event['image_id'],
                        "event_date" => $request->event['date'],
                        "background_color" => $request->event['background_color'],
                        "text_color" => $request->event['text_color'],
                        "primary_typeface" => $request->event['primary_typeface'],
                        "secondary_typeface" => $request->event['secondary_typeface'],
                    ]
                );


                $lineups = $events->lineups()->createMany($request->lineups);

                //Payment
                $payment = new Payment;
                $payment->event_id = $events->id;
                $payment->reference_id = $clientReference;
                $payment->payment_url = $deserialisedResponse->data->authorization_url;
                $payment->save();

                return new MainResource(["data" => new EventCreationWrapperResource([$events,
                    ["amount" => (1 * env('PAYMENT_DOLLAR_RATE')),
                        "payment_url" => $deserialisedResponse->data->authorization_url]]),
                    "message" => "",
                    "status" => 200]);

            } else {
                return new MainResource(['data' => new stdClass(),
                    'message' => __('messages.get_slug_lookup_negative'),
                    'status' => 404]);
            }
        } else {
            return new MainResource(['data' => $validator->errors(), 'message' => '', 'status' => 400]);
        }


    }

    public function isEventActive(Event $event): bool
    {
        $eventDate = Carbon::create($event->event_date);
        $todaysDate = Carbon::today();

        if ($eventDate->greaterThan($todaysDate) || $eventDate->equalTo($todaysDate)) {
            return true;
        }

        return false;
    }

    public function show($id)
    {
        $events = Event::where('slug', $id)->where('status', '1')->first();
        return $this->return_event_found($events);
    }


    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'event_name' => 'required|string',
            'event_description' => 'required|string',
            'event_theme_color' => 'required',
            'background_color' => 'required',
            'category' => 'required',
            'text_color' => 'required',
            'primary_typeface' => 'required',
            'secondary_typeface' => 'required'
        ]);

        if (!$validator->fails()) {
            $event = Event::find($id);
            // The user can update the post...
            if ($event !== null) {
                if (Gate::forUser($request->organizer)->allows('update-event', $event)) {
                    $event->event_name = $request->event_name;
                    $event->event_description = $request->event_description;
                    $event->event_theme_color = $request->event_theme_color;
                    $event->background_color = $request->background_color;
                    $event->text_color = $request->text_color;
                    $event->category = $request->category;
                    $event->primary_typeface = $request->primary_typeface;
                    $event->secondary_typeface = $request->secondary_typeface;
                    $event->save();


                    if ($event->wasChanged()) {
                        return new MainResource(['data' => new EventResource($event),
                            'message' => '',
                            'status' => 200]);
                    } else {
                        return new MainResource(['data' => new stdClass(),
                            'message' => '',
                            'status' => 200]);
                    }
                } else {
                    return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 403]);
                }
            } else {
                return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 404]);
            }

        } else {
            return new MainResource(['data' => $validator->errors(), 'message' => '', 'status' => 400]);
        }


        //

    }


    public function get_event_by_id(int $id)
    {
        $event = Event::where('id', $id)->where('status', '1')->first();
        return $this->return_event_found($event);
    }


    public function slug_look_up($slug)
    {
        //Clean Slug
        $slg = Str::squish($slug);
        $cleanedSlug = Str::slug($slg, '-');

        $event = Event::where('slug', $cleanedSlug)->first();
        if ($event != null) {
            return new MainResource(['data' => new EventResource($event),
                'message' => __('messages.get_slug_lookup_negative', ['slug' => $slug]),
                'status' => 404]);

        } else {
            return new MainResource(['data' => new stdClass(),
                'message' => __('messages.get_slug_lookup_positive', ['slug' => $slug]),
                'status' => 200]);
        }
    }


    public function destroy(Request $request, $id)
    {
        //
        $event = Event::find($id);
        if ($event != null) {
            if (Gate::forUser($request->organizer)->allows('update-event', $event)) {
                $event->delete();
                return new MainResource(['data' => new stdClass(),
                    'message' => '',
                    'status' => 200]);
            } else {
                return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 403]);
            }

        } else {
            return new MainResource(['data' => new stdClass(),
                'message' => '',
                'status' => 404]);
        }
    }


    public function return_event_found($events)
    {
        if ($events === null) {
            return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 404]);
        } else {
            //Make room for a demo event, that's always active

            if ($this->isEventActive($events)) {
                $lineups = $events->lineups;
                $organizer = Organizer::find($events->user_id);
                return new MainResource(['data' => new EventWrapperResource([$events, $organizer]),
                    'message' => __('messages.get_event'),
                    'status' => 200]);
            } else {
                return new MainResource(['data' => new StdClass(),
                    'message' => 'Sorry!, the event is either old or not found',
                    'status' => 404]);
            }

        }
    }
}
