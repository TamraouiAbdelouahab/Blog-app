<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Modules\Blog\Controllers\ArticleController;
use Modules\Blog\Controllers\CategoryController;
use Modules\Blog\Controllers\TagController;

// Route::get('Blog/{any}', function () {
//     return view('Blog::index');
// })->where('any', '.*');
// Route::get('hello', function () {
//     return view('Blog::Hello');
// })->where('any', '.*');
    Route::get('dashboardBlog', function () {
        return Inertia::render('admin/DashboardBlog');
    })->name('dashboard');
    Route::resource('/dashboard/tag', TagController::class);
    Route::resource('/dashboard/category', CategoryController::class);
    Route::resource('/dashboard/article', ArticleController::class);

Route::get('home', function () {
    return Inertia::render('admin/article/index');
});
// Route::get('debug', function () {
//     return view('Blog::debug');
// });
