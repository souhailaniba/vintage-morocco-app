<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Http\Controllers\ProductController;
use App\Http\Resources\ProductResource;

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

Route::get('/Product/{id}', function($id){
    return new ProductResource(Product::findOrFail($id));
});

Route::get('/Products', function(){
    return ProductResource::collection(Product::all());
});

Route::put('/Product/{id}',[ProductController::class,'update']);

Route::delete('/Product/{id}',[ProductController::class,'destroy']);

Route::post('/Products',[ProductController::class,'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
