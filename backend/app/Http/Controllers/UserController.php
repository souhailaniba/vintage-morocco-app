<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UserController extends Controller
{
    public function register(Request $request){
        
        $user = User::where('email',$request['email'])->first();

        if($user){
            $response['status'] = 0;
            $response['message'] = 'Email already exists!';
            $response['code'] = 409;
        } else {
            $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'adress' => $request->adress,
            'password' => bcrypt($request->password)
        ]);
        
        $response['status'] = 1;
        $response['message'] = 'User registered successfully!';
        $response['code'] = 200;
        }
        
        return response()->json($response);
    }
}
