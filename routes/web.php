<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\TestimoniController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PengajarController;
use App\Http\Controllers\PesertaController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::resource('berita', BeritaController::class);
Route::resource('testimoni', TestimoniController::class);
Route::resource('galery', GaleryController::class);
Route::resource('program', ProgramController::class);
Route::resource('pengajar', PengajarController::class);
Route::resource('peserta', PesertaController::class);
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

// // Rute untuk dashboard admin
// Route::middleware(['auth', 'admin'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
// });


// // Rute untuk beranda pengguna biasa
// Route::get('/', [HomeController::class, 'index'])->name('home');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
// });
// Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('dashboard');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';