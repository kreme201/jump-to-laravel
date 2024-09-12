<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;

class BoardQuestionDetailViewAction extends Controller
{
    public function __invoke(Request $request, Question $question)
    {
        $question->loadCount('votes');
        $question->load([
            'user:id,name',
            'answers.user:id,name',
            'answers' => function (HasMany $q) {
                $q->withCount('votes');
            },
        ]);

        return $this->view('board.question.view', compact('question'));
    }
}
