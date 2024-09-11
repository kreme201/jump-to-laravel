<?php

namespace App\Http\Controllers\Board\Answer;

use App\Http\Controllers\Controller;
use App\Models\Board\Answer;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardAnswerFormViewAction extends Controller
{
    public function __invoke(Request $request, Question $question, Answer $answer)
    {
        return $this->view('board.answer.form', compact('question', 'answer'));
    }
}
