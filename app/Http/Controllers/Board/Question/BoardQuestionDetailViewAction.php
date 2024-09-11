<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardQuestionDetailViewAction extends Controller
{
    public function __invoke(Request $request, Question $question)
    {
        $question->load('user:id,name');
        return $this->view('board.question.view', compact('question'));
    }
}
