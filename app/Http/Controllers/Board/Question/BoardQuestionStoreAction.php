<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\QuestionRequest;
use App\Models\Board\Question;

class BoardQuestionStoreAction extends Controller
{
    public function __invoke(QuestionRequest $request, ?Question $question = null)
    {
        if (! is_null($question)) {
            $question->update($request->validated());
            return to_route('board.question.view', compact('question'));
        }

        $request->user()->questions()->create($request->validated());
        return to_route('board.question.list');
    }
}
