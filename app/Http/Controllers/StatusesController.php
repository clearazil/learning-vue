<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Status;
use App\Models\User;

class StatusesController extends Controller
{
    public function index()
    {
        $statuses = Status::with('user:id,name')->get();

        return response()->json($statuses);
    }

    public function store(Request $request)
    {
        $this->validate($request, ['body' => 'required']);

        $status = User::find(1)
            ->statuses()
            ->create($request->only(['body']));

        return $status->load('user:id,name');
    }
}
