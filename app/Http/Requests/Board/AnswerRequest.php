<?php

namespace App\Http\Requests\Board;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AnswerRequest extends FormRequest
{
    public function authorize() : bool
    {
        return Auth::check();
    }

    public function rules() : array
    {
        return [
            'content' => ['required'],
        ];
    }
}
