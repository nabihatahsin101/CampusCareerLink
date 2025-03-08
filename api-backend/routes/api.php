<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Post\PostJobController;
use App\Http\Controllers\ResearchController;

// 🆓 Public Routes (Accessible Without Authentication)
Route::post('/apply', [ApplicationController::class, 'store']);
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'userLogin']);
Route::post('/admin/login', [AuthController::class, 'adminLogin']);

// Fetch job posts
Route::get('/posts', [PostJobController::class, 'index']);
Route::get('/posts/{id}', [PostJobController::class, 'show']);

// Research routes
Route::get('/research', [ResearchController::class, 'index']);

// 🛑 Protected Routes (Require Authentication)
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Profile Route
    Route::get('/profile', function (Request $request) {
        return response()->json([
            'message' => 'Protected content',
            'user_id' => $request->get('user_id'),
        ]);
    });

    // 🏢 Dashboard
    Route::get('/jobs/count', [DashboardController::class, 'getJobCount']);

    // 📂 Applications (Admin Access)
    Route::get('/applications', [ApplicationController::class, 'index']);
    Route::delete('/applications/{id}', [ApplicationController::class, 'destroy']);

    // 📌 Job Post Management
    Route::prefix('posts')->group(function () {
        Route::post('/create', [PostJobController::class, 'create']);
        Route::put('/{id}', [PostJobController::class, 'update']);
        Route::delete('/{id}', [PostJobController::class, 'destroy']);
    });

    // 👥 User Management (Admin Access)
    Route::get('/users', [UserController::class, 'index']);
    Route::delete('/users/{id}', [AuthController::class, 'deleteUser']);
});
