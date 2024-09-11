<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardQuestionFormViewAction extends Controller
{
    public function __invoke(Request $request, ?Question $question = null)
    {
        return $this->view('board.question.form', compact('question'));
    }
}
