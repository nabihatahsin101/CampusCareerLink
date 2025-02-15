<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
}
