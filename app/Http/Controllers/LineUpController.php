<?php

namespace App\Http\Controllers;

use App\Http\Resources\LineUpResource;
use App\Http\Resources\MainResource;
use App\Models\LineUp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
use stdClass;

class LineUpController extends Controller
{
    //

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_id' => 'required|int',
            'title' => 'required|string',
            'description' => 'required',
            'start_time' => 'required|date',
            'end_time' => 'required|date',
            'status' => 'required|string'
        ]);

        if (!$validator->fails()) {

            $_lineup = LineUp::where('event_id', $request->event_id)->first();
            if ($_lineup != null) {
                if (Gate::forUser($request->organizer)->allows('update-event', $_lineup->event)) {
                    $lineup = LineUp::create(
                        [
                            'event_id' => $request->event_id,
                            'title' => $request->title,
                            'description' => $request->description,
                            'start_time' => $request->start_time,
                            'end_time' => $request->end_time,
                            'status' => $request->status
                        ]
                    );

                    if ($lineup !== null) {
                        return new MainResource(['data' => new LineUpResource($lineup), 'message' => '', 'status' => 201]);

                    } else {
                        return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 400]);
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

    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required',
            'start_time' => 'required|date',
            'end_time' => 'required|date',
            'status' => 'required|string'
        ]);

        if (!$validator->fails()) {
            $lineup = LineUp::find($id);

            if (Gate::forUser($request->organizer)->allows('update-event', $lineup->event)) {
                if ($lineup !== null) {
                    $lineup->title = $request->title;
                    $lineup->description = $request->description;
                    $lineup->start_time = $request->start_time;
                    $lineup->end_time = $request->end_time;
                    $lineup->status = $request->status;
                    $lineup->save();

                    if ($lineup->wasChanged()) {
                        return new MainResource(['data' => new LineUpResource($lineup), 'message' => '', 'status' => 200]);
                    } else {
                        return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 200]);
                    }
                } else {
                    return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 404]);
                }
            } else {
                return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 403]);
            }
        } else {
            return new MainResource(['data' => $validator->errors(), 'message' => '', 'status' => 400]);
        }


    }


    public function destroy(Request $request, $id)
    {
        $lineup = LineUp::find($id);
        if ($lineup != null) {
            if (Gate::forUser($request->organizer)->allows('update-event', $lineup->event)) {
                $lineup->delete();
                return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 200]);
            } else {
                return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 403]);
            }

        } else {
            return new MainResource(['data' => new stdClass(), 'message' => '', 'status' => 404]);
        }
    }

}
