<?php

use App\Http\Controllers\BerandaControler;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\TestimoniController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PengajarController;
use App\Http\Controllers\PesertaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HalamanberitaController;
use App\Http\Controllers\HalamangaleriController;
use App\Http\Controllers\HalamankontakController;
use App\Http\Controllers\HalamanprogramController;
use App\Http\Controllers\TentangController;
use App\Http\Controllers\TestiController;
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

//Rute untuk user costumer yang akan mengakses informasi di sistem (tanpa autentikasi)
Route::get('/', [BerandaControler::class, 'index'])->name('Beranda');
Route::get('/Tentang', [TentangController::class, 'index'])->name('Tentang');
Route::get('/Listprogram', [HalamanprogramController::class, 'index'])->name('program');
Route::get('/Listtestimoni', [TestiController::class, 'index'])->name('testimoni');
Route::get('/Listgalery', [HalamangaleriController::class, 'index'])->name('galery');
Route::get('/Listberita', [HalamanberitaController::class, 'index'])->name('berita');
Route::get('/kontak', [HalamankontakController::class, 'index'])->name('kontak');

//Rute untuk user Admin yang sudah melakukan autentikasi dan terverifikasi
Route::middleware(['auth','verified'])->group(function (){
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))
        ->name('dashboard');
    Route::resource('beritas', BeritaController::class);
    Route::delete('/beritas/{id}', [BeritaController::class, 'destroy']);
    Route::put('/beritas/{id}', [ProgramController::class, 'update'])->name('beritas.update');
    Route::resource('testimoni', TestimoniController::class);
    Route::resource('galery', GaleryController::class);
    Route::resource('programs', ProgramController::class);
    Route::get('/programs/create', [ProgramController::class, 'create'])->name('programs.create');
    Route::get('/programs/{id_program}/edit', [ProgramController::class, 'edit'])->name('programs.edit');
    Route::put('/programs/{id_program}', [ProgramController::class, 'update'])->name('programs.update');
    Route::delete('/programs/{id_program}', [ProgramController::class, 'destroy']);
    Route::resource('pengajars', PengajarController::class);
    Route::delete('/pengajars/{id_pengajar}', [ProgramController::class, 'destroy']);
    Route::resource('peserta', PesertaController::class);
});

//Route sementara
Route::get('/Welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//Route untuk autentikasi
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware(['auth', 'verified'])->group(function () {
// Route::get('/dashboard', [ProgramController::class, 'index'])->name('dashboard');
// Route::get('/program', [ProgramController::class, 'index']);
// Route::post('/programs', [ProgramController::class, 'store']);
// Route::put('/programs/{id}', [ProgramController::class, 'update']);
// Route::delete('/programs/{id}', [ProgramController::class, 'destroy']);
// Route::resource('berita', BeritaController::class);
// Route::resource('testimoni', TestimoniController::class);
// Route::resource('galery', GaleryController::class);
// Route::resource('program', ProgramController::class);
// Route::resource('pengajar', PengajarController::class);
// Route::resource('peserta', PesertaController::class);
// });

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard/program', [DashboardController::class, 'index'])->name('dashboard');
// });
// Route::resource('program', ProgramController::class);

// // Rute untuk dashboard admin
// Route::middleware(['auth', 'admin'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
// });

// // Rute untuk beranda pengguna biasa
// Route::get('/', [HomeController::class, 'index'])->name('home');


// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
// });
// Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

