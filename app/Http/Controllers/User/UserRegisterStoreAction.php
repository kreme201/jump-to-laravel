<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;

class UserRegisterStoreAction extends Controller
{
    public function __invoke(UserRequest $request)
    {
        User::create($request->validated());

        return to_route('index');
    }
}
