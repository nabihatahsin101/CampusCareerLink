<?php

namespace App\Http\Controllers;

use App\Models\Job;  // <-- Import the Job model
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::all(); // Get all jobs from the database
        return response()->json($jobs); // Return jobs as JSON response
    }
}
