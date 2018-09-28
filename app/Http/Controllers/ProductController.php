<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
  public function search(Request $request)
  {
    $result = Product::where('name', 'like', "%$request->product%")->get();
    return $result;
  }

  public function store(Request $request)
  {
    $this->validate($request, [
       'name' => 'required|unique:products'
    ]);

    $product = Product::create([
        'name' => $request->name,
        'carbohydrates' => $request->carbohydrates,
        'counten' => $request->counten,
        'type' => $request->type
    ]);

    if ($product) {
      return $product;
    }
  }
}
