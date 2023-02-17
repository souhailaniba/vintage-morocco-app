<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Laravel\Sanctum\PersonalAccessToken;
use Laravel\Sanctum\HasApiTokens;

class LogController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->tokens()->create([
                'name' => 'authToken',
            ])->plainTextToken;
            return response()->json(['token' => $token]);
        }

        return response()->json(['error' => 'Invalid login credentials']);
    }


    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'phone' => 'required',
            'address' => 'required',
        ]);

        $validatedData['password'] = bcrypt($validatedData['password']);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
        ]);

        $token = $user->tokens()->create([
            'name' => 'authToken',
        ])->plainTextToken;

        return response()->json(['token' => $token], 201);
    }

}
