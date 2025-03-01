<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\PostJobController;
<<<<<<< HEAD
use App\Http\Controllers\Post\JobApplicationController;
use App\Http\Controllers\UserController;

// Post routes
=======
use App\Http\Controllers\ApplicationController;
>>>>>>> cc89f000a494dd4086b2b7c1466eedc82d655f15
Route::post('/createpost', [PostJobController::class, 'create']);
Route::put('/posts/{id}', [PostJobController::class, 'update']);
Route::delete('/posts/{id}', [PostJobController::class, 'destroy']);
Route::get('/posts', [PostJobController::class, 'index']);
Route::get('/posts/{id}', [PostJobController::class, 'show']);

<<<<<<< HEAD
// User routes
Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/{id}', [AuthController::class, 'deleteUser']);
=======
>>>>>>> cc89f000a494dd4086b2b7c1466eedc82d655f15
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'userLogin']);

<<<<<<< HEAD
// Apply routes
Route::post('/apply', [JobApplicationController::class, 'store']);

// Password change route (protected by session or token)
Route::middleware(['auth:sanctum'])->post('/user/change-password', [UserController::class, 'changePassword']);

// Research route
use App\Http\Controllers\ResearchController;

Route::get('/research', [ResearchController::class, 'index']);
=======

Route::post('/apply', [ApplicationController::class, 'store']);


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// ✅ Secure profile route with JWT Middleware
Route::middleware(['jwt.auth'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json([
            'message' => 'Protected content',
            'user_id' => $request->get('user_id')
        ]);
    });
});
>>>>>>> cc89f000a494dd4086b2b7c1466eedc82d655f15
