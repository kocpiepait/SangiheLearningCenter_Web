<?php

namespace App\Http\Controllers;

use App\Models\Pengajar;
use App\Models\Program;
use Database\Seeders\ProgramSeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $programs = Program::with(['pengajar', 'pesertas'])->paginate(10);
        return Inertia::render('Programs/Index', ['programs' => $programs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pengajar = Pengajar::all();
        return Inertia::render('Programs/Create', ['pengajar' => $pengajar]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_program' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'lesson' => 'required|string|',
            'img_program' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'id_pengajar' => 'nullable|exists:pengajar,id_pengajar',
        ]);

        $program = new Program();
        $program->nama_program = $request->nama_program;
        $program->deskripsi = $request->deskripsi;
        $program->lesson = $request->lesson;

        if ($request->hasFile('img_program')) {
            $imageName = time() . '.' . $request->img_program->extension();
            $request->img_program->move(public_path('images'), $imageName);
            $program->img_program = $imageName;
        }

        $program->save();

        return redirect()->route('programs.index')->with('success', 'Program berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id_program)
    {
        $program = Program::with('pengajar')->findOrFail($id_program);
        $pengajar = Pengajar::all(); // Ambil semua data pengajar
        return Inertia::render('Programs/Edit', ['program' => $program, 'pengajar' => $pengajar]);
        //  return Inertia::render('Program/Edit')->with ('Program', $program);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id_program)
{
    $request->validate([
        'nama_program' => 'required|string|max:255',
        'deskripsi' => 'required|string',
        'lesson' => 'required|string',
        'img_program' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'id_pengajar' => 'nullable|exists:pengajar,id_pengajar',
        // Tambahkan validasi lainnya sesuai kebutuhan
    ]);

    $program = Program::findOrFail($id_program);
    $program->nama_program = $request->nama_program;
    $program->deskripsi = $request->deskripsi;
    $program->lesson = $request->lesson;
    $program->id_pengajar = $request->id_pengajar;

    if ($request->hasFile('img_program')) {
        $imageName = time() . '.' . $request->img_program->extension();
        $request->img_program->move(public_path('images'), $imageName);
        $program->img_program = $imageName;
    }

    $program->save();

    return redirect()->route('programs.index')->with('success', 'Program berhasil diperbarui.');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
{
    $nama_program = $program->nama_program; 
    $program->delete();
    return to_route('programs.index')
            ->with('success', 'Program \"$nama_program\" deleted successfully.'); 
}
}