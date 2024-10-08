<?php

use App\Http\Controllers\Auth\AuthLoginStoreAction;
use App\Http\Controllers\Auth\AuthLoginViewAction;
use App\Http\Controllers\Auth\AuthLogoutStoreAction;
use App\Http\Controllers\Board\Answer\BoardAnswerDeleteAction;
use App\Http\Controllers\Board\Answer\BoardAnswerFormViewAction;
use App\Http\Controllers\Board\Answer\BoardAnswerStoreAction;
use App\Http\Controllers\Board\Answer\BoardAnswerVoteStoreAction;
use App\Http\Controllers\Board\Question\BoardQuestionDeleteAction;
use App\Http\Controllers\Board\Question\BoardQuestionDetailViewAction;
use App\Http\Controllers\Board\Question\BoardQuestionFormViewAction;
use App\Http\Controllers\Board\Question\BoardQuestionListViewAction;
use App\Http\Controllers\Board\Question\BoardQuestionStoreAction;
use App\Http\Controllers\Board\Question\BoardQuestionVoteStoreAction;
use App\Http\Controllers\User\UserRegisterStoreAction;
use App\Http\Controllers\User\UserRegisterViewAction;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register', UserRegisterViewAction::class)->name('user.form');
    Route::post('register', UserRegisterStoreAction::class, )->name('user.store');
    Route::get('login', AuthLoginViewAction::class)->name('login');
    Route::post('login', AuthLoginStoreAction::class)->name('login.store');
});


Route::middleware('auth')->group(function () {
    Route::post('logout', AuthLogoutStoreAction::class)->name('logout');

    Route::get('board', BoardQuestionListViewAction::class)->name('board.question.list');
    Route::get('board/create', BoardQuestionFormViewAction::class)->name('board.question.create');
    Route::get('board/{question}', BoardQuestionDetailViewAction::class)->name('board.question.view');
    Route::get('board/{question}/edit', BoardQuestionFormViewAction::class)->name('board.question.edit');
    Route::get('board/{question}/{answer}', BoardAnswerFormViewAction::class)->name('board.answer.edit');

    Route::post('board/create', BoardQuestionStoreAction::class)->name('board.question.store');
    Route::post('board/{question}/answer/create', BoardAnswerStoreAction::class)->name('board.answer.store');
    Route::post('board/{question}/vote', BoardQuestionVoteStoreAction::class)->name('board.question.vote');
    Route::post('board/{question}/{answer}/vote', BoardAnswerVoteStoreAction::class)->name('board.answer.vote');

    Route::put('board/{question}/edit', BoardQuestionStoreAction::class)->name('board.question.edit.store');
    Route::put('board/{question}/{answer}', BoardAnswerStoreAction::class)->name('board.answer.edit.store');

    Route::delete('board/{question}', BoardQuestionDeleteAction::class)->name('board.question.delete');
    Route::delete('board/{question}/{answer}', BoardAnswerDeleteAction::class)->name('board.answer.delete');

    Route::get('', fn () => to_route('board.question.list'))->name('index');
});
