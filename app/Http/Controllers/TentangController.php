<?php

namespace App\Http\Controllers;

use App\Models\Pengajar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TentangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pengajars = Pengajar::all();

        return Inertia::render('HalamanTentang', [
            'pengajars' => $pengajars,
        ]);
    }
}
