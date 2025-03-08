<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller {
        // Fetch all applications (for admin panel)
        public function index()
        {
            $applications = Application::all();
            return response()->json($applications);
        }
        public function destroy($id)
{
    try {
        $application = Application::findOrFail($id);

        // Delete the CV file from storage
        if ($application->cv) {
            Storage::disk('public')->delete($application->cv);
        }

        // Delete the application from the database
        $application->delete();

        return response()->json([
            'message' => 'Application deleted successfully'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Failed to delete application',
            'error' => $e->getMessage()
        ], 500);
    }
}
public function store(Request $request) {
    try {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'cv' => 'required|mimes:pdf|max:2048',
            'job_id' => 'required|integer',
            'job_title' => 'required|string',
        ]);

        $cvPath = $request->file('cv')->store('cvs', 'public');

        $application = Application::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'cv' => $cvPath,
            'job_id' => $request->job_id,
            'job_title' => $request->job_title,
        ]);

        return response()->json(['message' => 'Application submitted successfully!'], 201);
    } catch (\Exception $e) {
        \Log::error("Application Submission Error: " . $e->getMessage());
        return response()->json(['error' => 'Failed to submit application', 'message' => $e->getMessage()], 500);
    }
}

}
