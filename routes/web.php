<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  Route::get('/', function () {
    return view('index');
  });
  Route::get('/eat', function () {
    return view('eat');
  });
  Route::get('/products', function () {
    return view('product');
  });

});

Route::post('product-search', 'ProductController@search');
Route::post('product', 'ProductController@store');

Route::get('check-auth', function () {
  return auth()->check();
});

Route::get('logout', 'auth\LoginController@logout');

Auth::routes();

