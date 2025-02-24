<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\PostJobController;

Route::post('/createpost', [PostJobController::class, 'create']); // To create a circular
Route::put('/posts/{id}', [PostJobController::class, 'update']); // Update a job
Route::delete('/posts/{id}', [PostJobController::class, 'destroy']); // Delete a job
Route::get('/posts', [PostJobController::class, 'index']); // Get all posts
Route::get('/posts/{id}', [PostJobController::class, 'show']); // ✅ Get a single post

Route::post('/admin/login', [AuthController::class, 'adminLogin']); // Admin login
Route::post('/user/register', [AuthController::class, 'register']); // User signup
Route::post('/user/login', [AuthController::class, 'userLogin']); // User login

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});