<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\PostJobController;
use App\Http\Controllers\Post\JobApplicationController;
Route::post('/createpost', [PostJobController::class, 'create']);
Route::put('/posts/{id}', [PostJobController::class, 'update']);
Route::delete('/posts/{id}', [PostJobController::class, 'destroy']);
Route::get('/posts', [PostJobController::class, 'index']);
Route::get('/posts/{id}', [PostJobController::class, 'show']);

Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'userLogin']);

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
