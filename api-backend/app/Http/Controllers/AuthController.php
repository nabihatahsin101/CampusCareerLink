<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Signup;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'RegisterId' => 'required',
            'Password' => 'required'
        ]);

        $user = DB::table('login')
            ->where('RegisterId', $request->RegisterId)
            ->first();

            if ($user && Hash::check($request->Password, $user->Password)) {
                return response()->json(['message' => 'Login successful'], 200);
            } else {
                return response()->json(['message' => 'Invalid credentials'], 401);
            }
    }

    public function register(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:signups,email', // Fixed table name
            'password' => 'required|min:6|confirmed', // 'confirmed' ensures password_confirmation matches
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }
    
        // Create a new user in 'signups' table
        $user = DB::table('signups')->insert([
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Hash password for security
            'created_at' => now(),
            'updated_at' => now()
        ]);
    
        return response()->json(['message' => 'User registered successfully!'], 201);
    }
    

}
