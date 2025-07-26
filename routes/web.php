<?php

use App\Http\Controllers\WelcomePageController;
use Illuminate\Support\Facades\Route;

Route::get('/', WelcomePageController::class)
    ->name('welcome');
