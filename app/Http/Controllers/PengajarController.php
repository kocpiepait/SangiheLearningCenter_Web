<?php

namespace App\Http\Controllers;

use App\Models\Pengajar;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PengajarController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $pengajars = Pengajar::with('programs', 'pesertas')->paginate(11);
        return Inertia::render('Pengajar/Index', ['pengajars' => $pengajars]);
    }

    // Show the form for creating a new resource
    public function create()
    {
        $programs = Program::all();
        return Inertia::render('Pengajar/Create', ['programs' => $programs]);
    }

    // Store a newly created resource in storage
    public function store(Request $request)
    {
        $request->validate([
            'nama_pengajar' => 'required|string|max:255',
            'foto_pengajar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'pengalaman' => 'required|string|max:2000',
            'status' => 'required|string|max:255',
            'id_program' => 'nullable|array',
        ]);

        $imageName = time() . '.' . $request->foto_pengajar->extension();
        $request->foto_pengajar->move(public_path('images'), $imageName);

        $pengajar = Pengajar::create([
            'nama_pengajar' => $request->nama_pengajar,
            'foto_pengajar' => '/images/' . $imageName,
            'pengalaman' => $request->pengalaman,
            'status' => $request->status,
        ]);

        if (isset($validatedData['programs'])) {
            foreach ($validatedData['programs'] as $programData) {
                $program = new Program([
                    'nama_program' => $programData['nama_program'],
                ]);
                $pengajar->programs()->save($program);
            }
        }
        return redirect()->route('pengajars.index')->with('success', 'Pengajar berhasil ditambahkan.');
    }

    // Show the form for editing the specified resource
    public function edit($id)
    {
        $pengajar = Pengajar::with('programs')->findOrFail($id);
    $programs = Program::all();

    return inertia('Pengajar/Edit', [
        'pengajar' => $pengajar,
        'programs' => $programs,
        
    ]);
    }

    // Update the specified resource in storage
    public function update(Request $request, $id)
    {
        $request->validate([
            'nama_pengajar' => 'required|string|max:255',
            'foto_pengajar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'pengalaman' => 'required|string',
            'status' => 'required|string|max:255',
            'id_program' => 'nullable|array',
        ]);

        $pengajar = Pengajar::findOrFail($id);

        if ($request->hasFile('foto_pengajar')) {
            $imageName = time() . '.' . $request->foto_pengajar->extension();
            $request->foto_pengajar->move(public_path('images'), $imageName);
            $pengajar->foto_pengajar = '/images/' . $imageName;
        }

        $pengajar->update([
            'nama_pengajar' => $request->nama_pengajar,
            'pengalaman' => $request->pengalaman,
            'status' => $request->status,
        ]);

       // Tidak perlu memanggil sync() untuk relasi hasMany, cukup update program-program yang terkait
    foreach ($pengajar->programs as $program) {
        // Lakukan update id_pengajar di setiap program yang terkait
        if (!in_array($program->id_program, $request->id_programs)) {
            $program->update(['id_pengajar' => null]);
        }
    }

    foreach ($request->id_programs as $id_program) {
        Program::where('id_program', $id_program)->update(['id_pengajar' => $pengajar->id_pengajar]);
    }

        return redirect()->route('pengajars.index')->with('success', 'Pengajar berhasil diperbarui.');
    }

    // Remove the specified resource from storage
    public function destroy(Pengajar $pengajar)
    {
        $nama_pengajar = $pengajar->nama_pengajar; 
        $pengajar->delete();
    return to_route('pengajars.index')
            ->with('success', 'Program \"$nama_pengajar\" deleted successfully.'); 
    }
}
