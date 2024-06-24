<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Pengajar;
use App\Models\Program;
use App\Models\Testimoni;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BerandaControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $pengajars = Pengajar::all();
        $programs = Program::all();
        $testimonis = Testimoni::all();
        $beritas = Berita::all();

        return Inertia::render('Beranda', [
            // 'auth' => [
            //     'user' => Auth::user() ? Auth::user()->only('id', 'name', 'email', 'isAdmin', 'hasVerifiedEmail') : null,
            // ],
            'pengajars' => $pengajars,
            'programs' => $programs,
            'testimonis' => $testimonis,
            'beritas' => $beritas,
        ]);
    }
}
