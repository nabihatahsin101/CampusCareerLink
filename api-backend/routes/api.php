<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\PostJobController;
use App\Http\Controllers\Post\JobApplicationController;
use App\Http\Controllers\UserController;

// Post routes
Route::post('/createpost', [PostJobController::class, 'create']);
Route::put('/posts/{id}', [PostJobController::class, 'update']);
Route::delete('/posts/{id}', [PostJobController::class, 'destroy']);
Route::get('/posts', [PostJobController::class, 'index']);
Route::get('/posts/{id}', [PostJobController::class, 'show']);

// User routes
Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/{id}', [AuthController::class, 'deleteUser']);
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'userLogin']);

// Apply routes
Route::post('/apply', [JobApplicationController::class, 'store']);

// Password change route (protected by session or token)
Route::middleware(['auth:sanctum'])->post('/user/change-password', [UserController::class, 'changePassword']);

// Research route
use App\Http\Controllers\ResearchController;

Route::get('/research', [ResearchController::class, 'index']);
