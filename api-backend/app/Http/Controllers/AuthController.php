<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Helpers\JWTAuth;

class AuthController extends Controller
{
    private $jwtAuth;

    public function __construct()
    {
        $this->jwtAuth = new JWTAuth();
    }

    /**
     * Admin Login (From login table)
     */
    public function adminLogin(Request $request)
    {
        $request->validate([
            'RegisterId' => 'required',
            'Password' => 'required'
        ]);

        $admin = DB::table('login')
            ->where('RegisterId', $request->RegisterId)
            ->first();

        if ($admin && Hash::check($request->Password, $admin->Password)) {
            // Generate JWT token
            $token = $this->jwtAuth->encode(['user_id' => $admin->RegisterId]);

            return response()->json([
                'message' => 'Admin login successful',
                'token' => $token
            ], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    /**
     * User Registration (Insert into signups table)
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:signups,email',
            'password' => 'required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        DB::table('signups')->insert([
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return response()->json(['message' => 'User registered successfully!'], 201);
    }

    /**
     * User Login (From signups table)
     */
    public function userLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = DB::table('signups')->where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Generate JWT Token instead of random bytes
        $token = $this->jwtAuth->encode(['user_id' => $user->id]);

        return response()->json([
            'message' => 'User login successful',
            'user' => $user,
            'token' => $token,
        ], 200);
    }
}
