<?php

namespace App\Http\Controllers;

class WelcomePageController extends Controller
{
    public function __invoke()
    {
        return inertia('Welcome', [
            'laravelVersion' => app()->version(),
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
