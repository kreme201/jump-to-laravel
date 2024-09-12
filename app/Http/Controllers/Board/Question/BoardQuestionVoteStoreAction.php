<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardQuestionVoteStoreAction extends Controller
{
    public function __invoke(Request $request, Question $question)
    {
        $user = $request->user();

        if (! $user->question_votes->contains($question)) {
            $user->question_votes()->attach($question);
        } else {
            $user->question_votes()->detach($question);
        }

        return to_route('board.question.view', compact('question'));
    }
}
