<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\PostJobController;
use App\Http\Controllers\Post\JobApplicationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ApplicationController;

use App\Http\Controllers\ProfileController;

Route::post('/save-profile', [ProfileController::class, 'saveProfile']);


Route::post('/createpost', [PostJobController::class, 'create']);
Route::put('/posts/{id}', [PostJobController::class, 'update']);
Route::delete('/posts/{id}', [PostJobController::class, 'destroy']);
Route::get('/posts', [PostJobController::class, 'index']);
Route::get('/posts/{id}', [PostJobController::class, 'show']);
Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/{id}', [AuthController::class, 'deleteUser']);
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'userLogin']);
Route::get('/applications', [ApplicationController::class, 'index']);
Route::post('/apply', [ApplicationController::class, 'store']);
Route::delete('/applications/{id}', [ApplicationController::class, 'destroy']);
Route::middleware('auth:sanctum')->post('/admin/logout', [AuthController::class, 'adminLogout']);
// Add this route to your api.php
Route::get('/jobs/count', [DashboardController::class, 'getJobCount']);


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/apply', [JobApplicationController::class, 'store']);
// ✅ Secure profile route with JWT Middleware
Route::middleware(['jwt.auth'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json([
            'message' => 'Protected content',
            'user_id' => $request->get('user_id')
        ]);
    });
});
// routes/api.php
use App\Http\Controllers\ResearchController;

Route::get('/research', [ResearchController::class, 'index']);
