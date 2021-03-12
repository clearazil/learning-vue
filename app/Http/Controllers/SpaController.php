<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
        return view('spa.index');
    }

    public function status()
    {
        $statuses = Status::with('user:id,name')->get();

        return response()->json($statuses);
    }
}
