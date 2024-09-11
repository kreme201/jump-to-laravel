<?php

namespace App\Http\Controllers\Board\Question;

use App\Http\Controllers\Controller;
use App\Models\Board\Question;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class BoardQuestionListViewAction extends Controller
{
    public function __invoke(Request $request)
    {
        $search = $request->query('search');

        $query = Question::query();

        if (! empty($search)) {
            $query->where(function (Builder $q) use ($search) {
                $s = '%' . str_replace(' ', '%', $search) . '%';
                $q->where('subject', 'like', $s)
                    ->orWhere('content', 'like', $s)
                    ->orWhereHas('answers', function (Builder $q) use ($s) {
                        $q->where('content', 'like', $s);
                    })
                    ->orWhereHas('user', function (Builder $q) use ($s) {
                        $q->where('name', 'like', $s);
                    })
                    ->orWhereHas('answers.user', function (Builder $q) use ($s) {
                        $q->where('name', 'like', $s);
                    });
            });
        }

        $query->with('user:id,name')->withCount('answers');

        $questions = $query->latest()->paginate(10)->onEachSide(1);

        return $this->view('board.question.list', compact('questions', 'search'));
    }
}
