<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthLoginViewAction extends Controller
{
    public function __invoke(Request $request)
    {
        return $this->view('auth.login');
    }
}
