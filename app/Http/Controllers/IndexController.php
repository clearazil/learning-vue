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

    public function modal()
    {
        return view('index.modal');
    }

    public function ajaxRequests()
    {
        return view('index.ajaxRequests');
    }

    public function sharedState()
    {
        return view('index.sharedState');
    }
}
