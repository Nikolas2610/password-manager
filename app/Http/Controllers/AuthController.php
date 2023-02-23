<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request) {
        try {
            $data = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users,email',
                'password' => [
                    'required',
                    Password::min(8)->mixedCase()->numbers()->symbols(),
                ],
                'password_confirmation' => 'required|same:password|min:6'
            ]);
            /** @var \App\Models\User $user */
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password'])
            ]);
        
            $token = $user->createToken('main')->plainTextToken;
        
            return response([
                'user' => $user,
                'token' => $token
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 422);
        }        
    }

    public function login(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => 'required|email|string|exists:users,email',
                'password' => [
                    'required'
                ],
                'remember' => 'boolean'
            ]);
           
            $remember = $credentials['remember'] ?? false;
            unset($credentials['remember']);

            if (!Auth::attempt($credentials, $remember)) {
                return response([
                    'error' => 'The provided credentials are not correct'
                ], 422);
            }
            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;

            return response([
                'user' => $user,
                'token' => $token
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 404);
        }
    }

    public function confirmPassword(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => 'required|email|string|exists:users,email',
                'password' => [
                    'required'
                ],
            ]);

            if (!Auth::attempt($credentials, false)) {
                return response([
                    'error' => 'The Provided credentials are not correct'
                ], 422);
            }

            return response(['message' => 'Confirm password successfully'], 200);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function logout() {
        try {
            /** @var User $user */
            $user = Auth::user();
            $user->currentAccessToken()->delete();
            return response([
                'success' => true
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }        
    }
}
