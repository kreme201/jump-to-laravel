<?php

namespace App\Http\Controllers\Board\Answer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\AnswerRequest;
use App\Models\Board\Answer;
use App\Models\Board\Question;
use Illuminate\Http\Request;

class BoardAnswerStoreAction extends Controller
{
    public function __invoke(AnswerRequest $request, Question $question, ?Answer $answer = null)
    {
        if (is_null($answer)) {
            $answer = new Answer($request->validated());
            $answer->user()->associate($request->user());
            $answer->question()->associate($question);
            $answer->save();
        } else {
            $answer->update($request->validated());
        }

        return to_route('board.question.view', compact('question'));
    }
}
