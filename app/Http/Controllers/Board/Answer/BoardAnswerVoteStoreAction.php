<?php

namespace App\Http\Controllers\Board\Answer;

use App\Http\Controllers\Controller;
use App\Models\Board\Answer;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardAnswerVoteStoreAction extends Controller
{
    public function __invoke(Request $request, Question $question, Answer $answer)
    {
        $user = $request->user();

        if (! $user->answer_votes->contains($answer)) {
            $user->answer_votes()->attach($answer);
        } else {
            $user->answer_votes()->detach($answer);
        }

        return redirect()->back();
    }
}
