<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller {
    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'cv' => 'required|mimes:pdf|max:2048', // Only accept PDF, max 2MB
        ]);

        if ($request->hasFile('cv')) {
            $cvPath = $request->file('cv')->store('cvs', 'public'); // Save in storage/app/public/cvs
            $cvUrl = asset('storage/' . $cvPath); // Generate public URL
        } else {
            $cvPath = null;
            $cvUrl = null;
        }

        $application = Application::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'cv' => $cvPath, // Save file path in the database
        ]);

        return response()->json([
            'message' => 'Application submitted successfully!',
            'cv_url' => $cvUrl, // Return the file URL
        ], 200);
    }
}
