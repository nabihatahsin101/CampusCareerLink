<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Signup; // Your user model

class UserController extends Controller
{
    public function index()
    {
        return response()->json(Signup::all(), 200);
    }

    public function destroy($id)
    {
        $user = Signup::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}