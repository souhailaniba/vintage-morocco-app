<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Product;

class DashboardController extends Controller
{
    public function getTotalUsers()
    {
        $totalUsers = User::count();

        //return response()->json(['totalUsers' => $totalUsers]);
        return $totalUsers;
    }

    public function getTotalProducts()
    {
        $totalProducts = Product::count();

        return $totalProducts;
    }
    
    public function getTotalRevenue()
    {
        $totalRevenue = Product::sum('price');

        return $totalRevenue;
    }

    /*
    public function getTotalOrders()
    {
        $totalOrders = Product::sum('price');

        return $totalOrders;
    }
    */
}
