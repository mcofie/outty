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
        $clientReferenceId = $request['data']['clientReference'];
        $payment = Payment::where('reference_id', $clientReferenceId)->first();

        $payment->amount = $request['data']['amount'];
        $payment->payment_type = $request['data']['paymentType'];
        $payment->phone_number = $request['data']['phoneNumber'];
        $payment->transaction_id = $request['data']['paylinkId'];
        $payment->status = "successful";
        $payment->save();

        if ($payment->wasChanged()) {
            $event = Event::where('id', $payment->event_id)->first();
            $event->status = '1';
            $event->save();
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


    public function tryout()
    {
        $payment = Payment::where('id', 31)->where('status', '1')->first();
        $organizer = Organizer::where('id', $payment->event->user_id)->first();

//        $mail = new EventCreated($payment->event, $payment, $organizer);
        Mail::send(new \App\Mail\EventCreated($payment->event, $payment, $organizer));

//        dd($payment->event);
    }
}
