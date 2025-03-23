<?php

use Illuminate\Support\Facades\Route;

Route::get('Blog/{any}', function () {
    return view('Blog::index');
})->where('any', '.*');
