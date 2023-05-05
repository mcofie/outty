<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Http\Resources\MainResource;
use App\Mail\EventCreated;
use App\Models\Event;
use App\Models\Organizer;
use App\Models\Payment;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;

class PaymentController extends Controller
{

    public function webhook(Request $request)
    {


        $clientReferenceId = $request['Data']['ClientReference'];
        $payment = Payment::where('reference_id', $clientReferenceId)->first();

        $payment->amount = $request['Data']['Amount'];
        $payment->payment_type = $request['Data']['PaymentType'];
        $payment->phone_number = $request['Data']['MobileNumber'];
        $payment->transaction_id = $request['Data']['PaylinkId'];
        $payment->status = '1';
        $payment->save();

        if ($payment->wasChanged()) {
            $event = Event::where('id', $payment->event_id)->first();
            $event->status = '1';
            $event->save();

            //Send Email
            $payment = Payment::where('event_id', $payment->event_id)->where('status', '1')->first();
            $organizer = Organizer::where('id', $payment->event->user_id)->first();

            Mail::send(new \App\Mail\EventCreated($payment->event, $payment, $organizer));
        }

    }

    public function payment_confirmation($client_reference_id)
    {
        $payment = Payment::where('reference_id', $client_reference_id)->where('status', '1')->first();

        if ($payment != null) {
            return new MainResource(['data' => new EventResource($payment->event),
                'message' => '',
                'status' => 200]);
        } else {
            return new MainResource(['data' => new \stdClass(),
                'message' => '',
                'status' => 404]);
        }


    }

}
