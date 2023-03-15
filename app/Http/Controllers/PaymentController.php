<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Payment;

use Illuminate\Http\Request;

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
}
