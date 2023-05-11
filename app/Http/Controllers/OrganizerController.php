<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventOrganizerWrapperResource;
use App\Http\Resources\MainResource;
use App\Models\Event;
use App\Models\Organizer;
use Illuminate\Http\Request;

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
}
