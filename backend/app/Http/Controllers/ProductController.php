<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //———————————————————————————————————————————————————————

    public function index()
    {
        return Product::all();
    }

    //———————————————————————————————————————————————————————

    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    //———————————————————————————————————————————————————————

    public function show($id)
    {
        return Product::find($id);
    }

    //———————————————————————————————————————————————————————

    public function update(Request $request, $id)
    {
        if(Product::where('id',$id)->exists()){
            $product = Product::find($id);
            
            $product->title = $request -> title;
            $product->image = $request -> image;
            $product->price = $request -> price;
            $product->description = $request -> description;

            $product->save();

            return response()->json([
                "message" => "Record updated successfully!"
            ],200);
        } else {
            return response()->json([
                "message" => "Product not found!"
            ],404);
        }
    }

    //———————————————————————————————————————————————————————

    public function destroy($id)
    {
        if(Product::where('id',$id)->exists()){
            $product = Product::find($id);
            $product->delete();

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
