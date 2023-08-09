<?php

namespace App\Http\Controllers;

use App\Http\Resources\MainResource;
use App\Http\Resources\TemplateResource;
use Illuminate\Http\Request;
use App\Models\Template;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use stdClass;

class TemplateController extends Controller
{
    //

    public function show($id)
    {
        $template = Template::where('id', $id)->first();

        if ($template === null) {
            return new MainResource(['data' => new stdClass(),
                'message' => 'Template was not found',
                'status' => 404]);
        } else {
            return new MainResource(['data' => new TemplateResource($template),
                'message' => 'Template was successfully retrieved',
                'status' => 200]);
        }
    }


    public function store(Request $request)
    {

        dd($request->all());

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'directory' => 'required|string',
        ]);

        if (!$validator->fails()) {
            $template = Template::create(
                [
                    "name" => $request->event['name'],
                    "directory" => $userId,
                    "event_description" => $request->event['description'],
                ]
            );
            return new MainResource(['data' => new TemplateResource($template),
                'message' => 'Template was successfully retrieved',
                'status' => 200]);
        } else {
            return new MainResource(['data' => new TemplateResource($template),
                'message' => 'Template was successfully retrieved',
                'status' => 401]);
        }


    }
}
