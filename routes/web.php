<?php

use App\Http\Controllers\Auth\AuthLoginStoreAction;
use App\Http\Controllers\Auth\AuthLoginViewAction;
use App\Http\Controllers\Auth\AuthLogoutStoreAction;
use App\Http\Controllers\User\UserRegisterStoreAction;
use App\Http\Controllers\User\UserRegisterViewAction;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('register', UserRegisterViewAction::class)->name('user.form');
    Route::post('register', UserRegisterStoreAction::class, )->name('user.store');
    Route::get('login', AuthLoginViewAction::class)->name('login');
    Route::post('login', AuthLoginStoreAction::class)->name('login.store');
});


Route::middleware('auth')->group(function () {
    Route::post('logout', AuthLogoutStoreAction::class)->name('logout');

    Route::get('/', function () {
        return Inertia::render('index');
    })->name('index');

});
