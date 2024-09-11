<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return ! Auth::check();
    }

    public function rules(): array
    {
        return [
            'name'     => ['required'],
            'email'    => ['required', 'email'],
            'password' => ['required', 'confirmed'],
        ];
    }
}
