<?php

namespace App\Http\Controllers\Board\Answer;

use App\Http\Controllers\Controller;
use App\Models\Board\Answer;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardAnswerDeleteAction extends Controller
{
    public function __invoke(Request $request, Question $question, Answer $answer)
    {
        $answer->delete();

        return to_route('board.question.view', compact('question'));
    }
}
