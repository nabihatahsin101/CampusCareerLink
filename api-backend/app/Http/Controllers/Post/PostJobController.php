<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PostJob;
use Illuminate\Support\Facades\Validator;

class PostJobController extends Controller
{
    /**
     * Get all job circulars
     */
    public function index()
    {
        try {
            $jobs = PostJob::all();

            if ($jobs->isEmpty()) {
                return response()->json(['message' => 'No job circulars found'], 200);
            }

            return response()->json($jobs, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Create a new job post with file upload
     */
    public function create(Request $request)
    {
        try {
            // Validate input
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255',
                'department' => 'required|string|max:255',
                'grade' => 'required|string|max:255',
                'salary' => 'nullable|numeric',
                'posted_on' => 'required|date',
                'deadline' => 'required|date',
                'application_mode' => 'required|string|max:255',
                'attachments' => 'nullable|file|mimes:pdf|max:2048' // Only allow PDF files up to 2MB
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors()
                ], 422);
            }

            // Handle file upload
            $filePath = null;
            if ($request->hasFile('attachments')) {
                $file = $request->file('attachments');
                $filePath = $file->store('attachments', 'public'); // Store file in 'storage/app/public/attachments'
            }

            // Save job post
            $job = PostJob::create([
                'title' => $request->title,
                'department' => $request->department,
                'grade' => $request->grade,
                'salary' => $request->salary,
                'posted_on' => $request->posted_on,
                'deadline' => $request->deadline,
                'application_mode' => $request->application_mode,
                'attachments' => $filePath // Save file path in DB
            ]);

            return response()->json([
                'message' => 'Post added successfully!',
                'job' => $job
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Get a single job circular by ID
     */
    public function show($id)
    {
        try {
            $job = PostJob::find($id);

            if (!$job) {
                return response()->json(['message' => 'Job not found'], 404);
            }

            return response()->json($job, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Update an existing job circular
     */
    public function update(Request $request, $id)
    {
        try {
            $job = PostJob::find($id);

            if (!$job) {
                return response()->json(['message' => 'Job not found'], 404);
            }

            // Validate input
            $validator = Validator::make($request->all(), [
                'title' => 'sometimes|string|max:255',
                'department' => 'sometimes|string|max:255',
                'grade' => 'sometimes|string|max:255',
                'salary' => 'sometimes|numeric',
                'posted_on' => 'sometimes|date',
                'deadline' => 'sometimes|date',
                'application_mode' => 'sometimes|string|max:255',
                'attachments' => 'sometimes|file|mimes:pdf|max:2048' // File validation for updates
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors()
                ], 422);
            }

            // Handle file upload if provided
            if ($request->hasFile('attachments')) {
                $file = $request->file('attachments');
                $filePath = $file->store('attachments', 'public'); 
                $job->attachments = $filePath;
            }

            // Update job
            $job->update($request->except('attachments'));

            return response()->json([
                'message' => 'Job circular updated successfully!',
                'job' => $job
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Delete a job circular
     */
    public function destroy($id)
    {
        try {
            $job = PostJob::find($id);

            if (!$job) {
                return response()->json(['message' => 'Job not found'], 404);
            }

            // Delete the file if it exists
            if ($job->attachments) {
                \Storage::delete('public/' . $job->attachments);
            }

            $job->delete();

            return response()->json(['message' => 'Job circular deleted successfully!'], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }
}
