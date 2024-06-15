<?php

namespace App\Http\Controllers;

use App\Models\Processing;
use App\Models\Pengajar;
use App\Models\Peserta;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProcessingController extends Controller
{
    public function index()
    {
        $processings = Processing::with('pengajar', 'peserta', 'program')->get();
        return Inertia::render('Processing/Index', ['processings' => $processings]);
    }

    public function create()
    {
        $pengajars = Pengajar::all();
        $pesertas = Peserta::all();
        $programs = Program::all();
        return Inertia::render('Processing/Create', [
            'pengajars' => $pengajars,
            'pesertas' => $pesertas,
            'programs' => $programs,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_pengajar' => 'required|exists:pengajar,id_pengajar',
            'id_peserta' => 'required|exists:peserta,id_peserta',
            'id_program' => 'required|exists:program,id_program',
            'jumlah_peserta' => 'required|integer',
            'tahun_ajaran' => 'required|string',
        ]);

        $pengajar = Pengajar::findOrFail($request->id_pengajar);
        $peserta = Peserta::findOrFail($request->id_peserta);
        $program = Program::findOrFail($request->id_program);

        Processing::create([
            'id_pengajar' => $pengajar->id_pengajar,
            'nama_pengajar' => $pengajar->nama_pengajar,
            'id_peserta' => $peserta->id_peserta,
            'nama_peserta' => $peserta->nama_peserta,
            'id_program' => $program->id_program,
            'nama_program' => $program->nama_program,
            'jumlah_peserta' => $request->jumlah_peserta,
            'tahun_ajaran' => $request->tahun_ajaran,
        ]);

        return redirect()->to('processing')->with('success', 'Data processing berhasil ditambahkan.');
    }

    public function edit($id)
    {
        $processing = Processing::findOrFail($id);
        $pengajars = Pengajar::all();
        $pesertas = Peserta::all();
        $programs = Program::all();
        return Inertia::render('Processing/Edit', [
            'processing' => $processing,
            'pengajars' => $pengajars,
            'pesertas' => $pesertas,
            'programs' => $programs,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'id_pengajar' => 'required|exists:pengajar,id_pengajar',
            'id_peserta' => 'required|exists:peserta,id_peserta',
            'id_program' => 'required|exists:program,id_program',
            'jumlah_peserta' => 'required|integer',
            'tahun_ajaran' => 'required|string',
        ]);

        $processing = Processing::findOrFail($id);

        $pengajar = Pengajar::findOrFail($request->id_pengajar);
        $peserta = Peserta::findOrFail($request->id_peserta);
        $program = Program::findOrFail($request->id_program);

        $processing->update([
            'id_pengajar' => $pengajar->id_pengajar,
            'nama_pengajar' => $pengajar->nama_pengajar,
            'id_peserta' => $peserta->id_peserta,
            'nama_peserta' => $peserta->nama_peserta,
            'id_program' => $program->id_program,
            'nama_program' => $program->nama_program,
            'jumlah_peserta' => $request->jumlah_peserta,
            'tahun_ajaran' => $request->tahun_ajaran,
        ]);

        return redirect()->route('processing.index')->with('success', 'Data processing berhasil diperbarui.');
    }

    public function destroy($id)
    {
        Processing::findOrFail($id)->delete();
        return redirect()->route('processing.index')->with('success', 'Data processing berhasil dihapus.');
    }






    // /**
    //  * Display a listing of the resource.
    //  */
    // public function index()
    // {
    //     $processings = Processing::with('pengajar', 'peserta', 'program')->get();
    //     return Inertia::render('Processing/Index', ['processings' => $processings]);
    // }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     $pengajars = Pengajar::all();
    //     $pesertas = Peserta::all();
    //     $programs = Program::all();
    //     return Inertia::render('Processing/Create', ['pengajars' => $pengajars, 'pesertas' => $pesertas, 'programs' => $programs]);
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'id_pengajar' => 'required',
    //         'nama_pengajar' => 'required',
    //         'id_peserta' => 'required',
    //         'nama_peserta' => 'required',
    //         'id_program' => 'required',
    //         'nama_program' => 'required',
    //         'jumlah_peserta' => 'required|integer',
    //         'tahun_ajaran' => 'required|integer',
    //     ]);

    //     Processing::create($request->all());

    //     return redirect()->route('processings.index');
    // }

    // /**
    //  * Display the specified resource.
    //  */
    // public function show(string $id)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(string $id)
    // {
    //     $processing = Processing::findOrFail($id);
    //     $pengajars = Pengajar::all();
    //     $pesertas = Peserta::all();
    //     $programs = Program::all();
    //     return Inertia::render('Processing/Edit', ['processing' => $processing, 'pengajars' => $pengajars, 'pesertas' => $pesertas, 'programs' => $programs]);
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function update(Request $request, string $id)
    // {
    //     $request->validate([
    //         'id_pengajar' => 'required',
    //         'nama_pengajar' => 'required',
    //         'id_peserta' => 'required',
    //         'nama_peserta' => 'required',
    //         'id_program' => 'required',
    //         'nama_program' => 'required',
    //         'jumlah_peserta' => 'required|integer',
    //         'tahun_ajaran' => 'required|integer',
    //     ]);

    //     $processing = Processing::findOrFail($id);
    //     $processing->update($request->all());

    //     return redirect()->route('processings.index');
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(string $id)
    // {
    //     Processing::findOrFail($id)->delete();
    //     return redirect()->route('processings.index');
    // }
}