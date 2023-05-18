<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventOrganizerWrapperResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\MainResource;
use App\Models\Event;
use App\Models\Organizer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
use stdClass;

class OrganizerController extends Controller
{
    //

    public function request_token(Request $request)
    {

    }


    public function get_events_by_token($token)
    {
        $organizer = Organizer::where('token', $token)->first();

        if ($organizer != null) {
            $events = Event::where('user_id', $organizer->id)->get();
            return new MainResource(['data' => new EventOrganizerWrapperResource([$events, $organizer]),
                'message' => __('messages.get_event'),
                'status' => 200]);
        } else {
            return new MainResource(['data' => [],
                'message' => __('messages.get_event'),
                'status' => 404]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'phone_number' => 'required',
        ]);


        if (!$validator->fails()) {
            $organizer = Organizer::find($id);
            // The user can update the post...
            if ($organizer !== null) {
                if (Gate::forUser($request->organizer)->allows('update-event', $event)) {
                    $organizer->name = $request->name;
                    $organizer->email = $request->email;
                    $organizer->phone_number = $request->phone_number;
                    $organizer->save();


                    if ($organizer->wasChanged()) {
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

    }
}
