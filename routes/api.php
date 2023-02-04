<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordManagerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum', 'private_app_key'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    // Routes for the passwords
    Route::post('/password', [PasswordManagerController::class, 'store']);
    Route::get('/get-user-password-data', [PasswordManagerController::class, 'getUserPasswordData']);
    Route::post('/show-password', [PasswordManagerController::class, 'showPassword']);
    Route::put('/password/{password}', [PasswordManagerController::class, 'update']);
    Route::delete('/password/{password}', [PasswordManagerController::class, 'destroy']);

});

Route::middleware(['private_app_key'])->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/confirm-password', [AuthController::class, 'confirmPassword']);
});
