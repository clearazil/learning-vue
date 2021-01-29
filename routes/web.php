<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/tabs', [IndexController::class, 'tabs']);
Route::get('/component-communication', [IndexController::class, 'componentCommunication']);
Route::get('/modal', [IndexController::class, 'modal']);
Route::get('/ajax-requests', [IndexController::class, 'ajaxRequests']);

Route::get('/skills', function () {
    return ['Programming', 'Cooking', 'Cleaning', 'Piano Playing', 'Technical'];
});

Route::group([
    'prefix' => 'projects',
], function () {
    Route::get('/', [ProjectsController::class, 'index'])
         ->name('projects.project.index');
    Route::get('/create', [ProjectsController::class, 'create'])
         ->name('projects.project.create');
    Route::get('/show/{project}', [ProjectsController::class, 'show'])
         ->name('projects.project.show')->where('id', '[0-9]+');
    Route::get('/{project}/edit', [ProjectsController::class, 'edit'])
         ->name('projects.project.edit')->where('id', '[0-9]+');
    Route::post('/', [ProjectsController::class, 'store'])
         ->name('projects.project.store');
    Route::put('project/{project}', [ProjectsController::class, 'update'])
         ->name('projects.project.update')->where('id', '[0-9]+');
    Route::delete('/project/{project}', [ProjectsController::class, 'destroy'])
         ->name('projects.project.destroy')->where('id', '[0-9]+');

});
