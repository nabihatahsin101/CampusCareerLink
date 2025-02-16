<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * User Registration
     */
    public function register(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:signups,email',
            'password' => 'required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        // Insert user into 'signups' table
        DB::table('signups')->insert([
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Hash password for security
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return response()->json(['message' => 'User registered successfully!'], 201);
    }

        /**
     * User Login (From signups table)
     */
    public function login(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        // Check if user exists in 'signups' table
        $user = DB::table('signups')->where('email', $request->email)->first();

        // Verify password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Generate a simple token (for better security use Sanctum or Passport)
        $token = bin2hex(random_bytes(32));

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token,
        ], 200);
    }
}
