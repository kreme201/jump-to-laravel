<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardQuestionDeleteAction extends Controller
{
    public function __invoke(Request $request, Question $question)
    {
        $question->delete();

        return to_route('board.question.list');
    }
}
