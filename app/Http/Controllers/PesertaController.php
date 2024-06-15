<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PesertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pesertas = Peserta::with('program')->get();
        return Inertia::render('Peserta/Index', ['pesertas' => $pesertas]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $programs = Program::all();
        return Inertia::render('Peserta/Create', ['programs' => $programs]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_peserta' => 'required|string',
            'id_program' => 'required|exists:program,id_program',
            'usia_peserta' => 'required|integer',
            'alamat' => 'required|string',
            'jenis_kelamin' => 'required|string',
            'TTL' => 'required|date',
        ]);

        Peserta::create([
            'nama_peserta' => $request->nama_peserta,
            'id_program' => $request->id_program,
            'usia_peserta' => $request->usia_peserta,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'TTL' => $request->TTL,
        ]);

        return redirect()->to('peserta');
    }

    /**
     * Display the specified resource.
     */

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $peserta = Peserta::findOrFail($id);
        $programs = Program::all();
        return Inertia::render('Peserta/Edit', [
            'peserta' => $peserta, 
            'programs' => $programs
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        \Log::info($request->all());
        
        $request->validate([
            'nama_peserta' => 'required|string',
            'id_program' => 'required|exists:program,id_program',
            'usia_peserta' => 'required|integer',
            'alamat' => 'required|string',
            'jenis_kelamin' => 'required|string',
            'TTL' => 'required|date',
        ]);
        
        $peserta = Peserta::findOrFail($id);
        $peserta->update($request->all());
       
       
        // $peserta->nama_peserta = $request->input('nama_peserta');
        // $peserta->id_program = $request->input('id_program');
        // $peserta->usia_peserta = $request->input('usia_peserta');
        // $peserta->alamat = $request->input('alamat');
        // $peserta->jenis_kelamin = $request->input('jenis_kelamin');
        // $peserta->TTL = $request->input('TTL');

        // $peserta->save();


        return redirect()->route('peserta.index')->with('success', 'Peserta berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Peserta::findOrFail($id)->delete();
        return redirect()->route('peserta.index');
    }
}