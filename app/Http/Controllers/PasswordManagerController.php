<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;

class PasswordManagerController extends Controller
{

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'password' => 'required|string',
            'notes' => 'nullable|string',
            'website' => 'string',
            'username' => 'string',
        ]);

        $validatedData['user_id'] = Auth::id();

        // Encrypt sensitive data fields
        $sensitiveFields = ['title', 'username', 'notes', 'password', 'website'];
        foreach ($sensitiveFields as $field) {
            if (isset($validatedData[$field])) {
                $validatedData[$field] = Crypt::encryptString($validatedData[$field]);
            }
        }
        // $validatedData['password'] = Crypt::encryptString($validatedData['password']);
        // $validatedData['username'] = Crypt::encryptString($validatedData['username']);

        $password = Password::create($validatedData);

        return response()->json(['message' => 'Password created successfully', 'password' => $password], 201);
    }

    public function update(Request $request, Password $password)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'username' => 'required|string',
            'website' => 'required|string',
            'notes' => 'nullable|string',
            'password' => 'required|string',
        ]);

        // Encrypt sensitive data fields
        $sensitiveFields = ['title', 'username', 'notes', 'password', 'website'];
        foreach ($sensitiveFields as $field) {
            if (isset($validatedData[$field])) {
                $validatedData[$field] = Crypt::encryptString($validatedData[$field]);
            }
        }

        // Update the password record
        $password->update($validatedData);

        return response()->json(['message' => 'Password updated successfully', 'password' => $password], 200);
    }

    public function getUserPasswordData()
    {
        $user = Auth::user();

        $passwordManager = Password::where('user_id', $user->id)
            ->orderByDesc('created_at')
            ->get();

        foreach ($passwordManager as $item) {
            if ($item->website) $item->website = Crypt::decryptString($item->website);
            if ($item->notes) $item->notes = Crypt::decryptString($item->notes);
            if ($item->title) $item->title = Crypt::decryptString($item->title);
            if ($item->username) $item->username = Crypt::decryptString($item->username);
            $item->password = $this->encryptPassword($item->password);
        }

        return $passwordManager;
    }

    private function encryptPassword($password)
    {
        $unhashPassword = Crypt::decryptString($password);
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        $encrypted = $this->my_encrypt($unhashPassword, $iv);
        return ['encrypted_password' => $encrypted, 'iv' => base64_encode($iv)];
    }


    private function my_encrypt($string, $key)
    {
        $encrypt_method = "AES-256-CBC";
        $secret_iv = $key;
        $key = hash('sha256', env('PASSWORD_IV_KEY'));
        $iv = substr(hash('sha256', $secret_iv), 0, 16);
        $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
        $output = base64_encode($output);
        return $output;
    }

    public function destroy(Password $password)
    {
        $password->delete();
        return response()->json(['message' => 'Password deleted successfully'], 200);
    }
}
