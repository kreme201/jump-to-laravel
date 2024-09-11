<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardQuestionListViewAction extends Controller
{
    public function __invoke(Request $request)
    {
        $questions = Question::with('user:id,name')->latest()->paginate(10)->onEachSide(1);

        return $this->view('board.question.list', compact('questions'));
    }
}
