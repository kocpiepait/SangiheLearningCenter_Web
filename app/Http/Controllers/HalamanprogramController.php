<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HalamanprogramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $programs = Program::with(['pengajar', 'pesertas'])->paginate(5);

        return Inertia::render('HalamanProgram', [
            'programs' => $programs,
        ]);
    }
}
