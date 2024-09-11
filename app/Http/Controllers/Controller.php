<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Arrayable;
use Inertia\Inertia;
use Inertia\Response;

abstract class Controller
{
    protected function view(
        string $component,
        array|Arrayable $props = [],
    ): Response {
        return Inertia::render(str_replace('.', '/', $component), $props);
    }
}
