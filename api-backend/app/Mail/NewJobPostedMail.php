<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewJobPostedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $job;

    /**
     * Create a new message instance.
     */
    public function __construct($job)
    {
        $this->job = $job;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('🚀 New Job Posted on CampusCareerLink')
            ->view('emails.newJobPosted');
    }
}
