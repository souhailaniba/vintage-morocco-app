<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Resources\ProductResource;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LogController;

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

// Get products by category
Route::get('Products/category/{category}', [ProductController::class, 'getProductsByCategory']);

// Get all categories
Route::get('/Products/categories', [ProductController::class, 'getAllCategories']);

// New methods I'm trying out

Route::put('/Product/{id}',[ProductController::class,'update']);

Route::delete('/Product/{id}',[ProductController::class,'destroy']);

Route::post('/Products',[ProductController::class,'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/register',[UserController::class,'register']);

/*
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});
*/

Route::middleware('api')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    // Draft
    Route::post('log', [LogController::class, 'login']);
    Route::post('reg', [LogController::class, 'register']);
});

/*
Route::controller(TodoController::class)->group(function () {
    Route::get('todos', 'index');
    Route::post('todo', 'store');
    Route::get('todo/{id}', 'show');
    Route::put('todo/{id}', 'update');
    Route::delete('todo/{id}', 'destroy');
}); 
*/

// New attempts 




