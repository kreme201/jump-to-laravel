<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserRegisterViewAction extends Controller
{
    public function __invoke(Request $request)
    {
        return $this->view('user.register');
    }
}
