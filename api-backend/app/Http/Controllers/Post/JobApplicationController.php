<?php
namespace App\Http\Controllers\Post;

 use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JobApplication;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class JobApplicationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'cv' => 'required|mimes:pdf|max:2048',
            'job_id' => 'required|exists:post_jobs,id',
        ]);

        // Store CV
        $cvPath = $request->file('cv')->store('cvs');

        // Save application in DB
        $application = JobApplication::create([
            'email' => $request->email,
            'cv' => $cvPath,
            'job_id' => $request->job_id,
        ]);

        // Send verification email
        Mail::to($request->email)->send(new ApplicationVerificationMail($application));

        return response()->json(['message' => 'Application submitted successfully!']);
    }
}
