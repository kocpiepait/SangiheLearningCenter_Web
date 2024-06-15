<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use App\Models\Pengajar;
use App\Models\Peserta;
use App\Models\Berita;
use App\Models\Testimoni;
use App\Models\Galery;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {    
        // return inertia('Dashboard', [
        //     // 'auth' => auth()->user(),
        //     'programs' => Program::all(),
        //     'pengajars' => Pengajar::all(),
        //     'pesertas' => Peserta::all(),
        //     'beritas' => Berita::all(),
        //     'testimonis' => Testimoni::all(),
        //     'galerys' => Galery::all(),
        // ]);

        $programs = Program::all();
        $pengajars = Pengajar::all();
        $pesertas = Peserta::all();
        $beritas = Berita::all();
        $testimonis = Testimoni::all();
        $galerys = Galery::all();

        return Inertia::render('Dashboard', compact('programs', 'pengajars', 'pesertas', 'beritas', 'testimonis', 'galerys'));
    }
}