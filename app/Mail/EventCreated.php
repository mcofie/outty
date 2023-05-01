<?php

namespace App\Mail;

use App\Models\Event;
use App\Models\Organizer;
use App\Models\Payment;
use Faker\Provider\Address;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EventCreated extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public Event $event, public Payment $payment, public Organizer $organizer)
    {
        //
//        dd($this->organizer);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            to: [$this->organizer['email']],
            subject: 'Thank you for your purchase',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.event-created',
            with: [
                'orderNumber' => $this->payment['reference_id'],
                'product' => 'outty.co',
                'price' => $this->payment['amount'],
                'date' => $this->event['event_date'],
                'slug' => $this->event['slug'],
                'event_name' => $this->event['event_name'],
                'organizerEmail' => $this->organizer['email'],
                'token' => $this->organizer['token'],
                'organizerName' => $this->organizer['name']
            ]
//            text: 'Something nice'
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
