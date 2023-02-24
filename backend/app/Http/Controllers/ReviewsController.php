<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewsController extends Controller
{
    //———————————————————————————————————————————————————————

    public function index()
    {
        return Review::all();
    }


    //———————————————————————————————————————————————————————

    public function store(Request $request)
    {
        return Review::create($request->all());
    }

    //———————————————————————————————————————————————————————

    public function show($id)
    {
        return Review::find($id);
    }

    //———————————————————————————————————————————————————————

    public function update(Request $request, $id)
    {
        if(Review::where('id',$id)->exists()){
            $Review = Review::find($id);
            
            $Review->comment = $request -> comment;
            $Review->owner = $request -> owner;

            $Review->save();

            return response()->json([
                "message" => "Record updated successfully!"
            ],200);
        } else {
            return response()->json([
                "message" => "Review not found!"
            ],404);
        }
    }

    //———————————————————————————————————————————————————————

    public function destroy($id)
    {
        if(Review::where('id',$id)->exists()){
            $Review = Review::find($id);
            $Review->delete();

            return response()->json([
                "message" => "Record cleared!"
            ],202);
        } else {
            return response()->json([
                "message" => "Review not found!"
            ],404);
        }
    }

    

}
