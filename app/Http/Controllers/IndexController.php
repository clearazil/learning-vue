<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function tabs()
    {
        return view('index.tabs');
    }

    public function componentCommunication()
    {
        return view('index.componentCommunication');
    }
}
