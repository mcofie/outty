<?php

namespace App\Http\Controllers;

use App\Http\Resources\MainResource;
use App\Models\Registry;
use Illuminate\Http\Request;

class RegistryController extends Controller
{
    public function store(Request $request)
    {



        $registry = Registry::firstOrCreate(
            ['email' => $request->email,
                'name' => $request->name, 'event_id' => $request->event_id, 'phone_number' => $request->phone_number]
        );

        return new MainResource(['data' => $registry, 'message' => '', 'status' => 200]);

    }
}
