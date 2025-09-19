<?php

namespace App\Mail;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class JobSelectedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $application;

    public function __construct(Application $application)
    {
        $this->application = $application;
    }

    public function build()
    {
        return $this->subject('Job Application Update')
                    ->view('emails.job_selected')
                    ->with([
                        'name' => $this->application->name,
                        'jobTitle' => $this->application->job_title,
                    ]);
    }
}
