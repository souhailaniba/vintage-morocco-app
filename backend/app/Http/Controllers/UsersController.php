<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    //———————————————————————————————————————————————————————

    public function index()
    {
        return User::all();
    }

    //———————————————————————————————————————————————————————

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    //———————————————————————————————————————————————————————

    public function show($id)
    {
        return User::find($id);
    }

    //———————————————————————————————————————————————————————

    public function update(Request $request, $id)
    {
        if(User::where('id',$id)->exists()){
            $user = User::find($id);
            
            $user->name = $request -> name;
            $user->email = $request -> email;
            //$user->passwrod = $request -> password;
            $user->phone = $request -> phone;
            $user->address = $request -> address;

            $user->save();

            return response()->json([
                "message" => "Record updated successfully!"
            ],200);
        } else {
            return response()->json([
                "message" => "User not found!"
            ],404);
        }
    }

    //———————————————————————————————————————————————————————

    public function destroy($id)
    {
        if(User::where('id',$id)->exists()){
            $user = User::find($id);
            $user->delete();

            return response()->json([
                "message" => "Record cleared!"
            ],202);
        } else {
            return response()->json([
                "message" => "Product not found!"
            ],404);
        }
    }

}
