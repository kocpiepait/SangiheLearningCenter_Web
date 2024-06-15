<?php

namespace App\Http\Controllers;

use App\Models\Pengajar;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Import class Storage untuk mengelola penyimpanan file
use Inertia\Inertia;

class PengajarController extends Controller
{
    public function index()
    {
        $pengajars = Pengajar::with('program')->get();
        return Inertia::render('Pengajar/Index', ['pengajars' => $pengajars]);
        // return Inertia::render('Dashboard', ['pengajars' => $pengajars]);
    }

    public function create()
    {
        $programs = Program::all();
        return Inertia::render('Pengajar/Create', ['programs' => $programs]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_pengajar' => 'required',
            'id_program' => 'required|exists:program,id_program',
            'foto_pengajar' => 'nullable|file|mimes:jpg,png,jpeg',
        ]);

        $fotoPath = $request->file('foto_pengajar')->store('fotos', 'public');

        Pengajar::create([
            'nama_pengajar' => $request->nama_pengajar,
            'id_program' => $request->id_program,
            'foto_pengajar' => $fotoPath
        ]);

        return redirect()->to('pengajar');
    }

    public function edit(Pengajar $pengajar)
    {
        $programs = Program::all();
        return Inertia::render('Pengajar/Edit', [
            'pengajar' => $pengajar,
            'programs' => $programs
        ]);
    }

    public function update(Request $request, $id)
    {
        // \Log::info('Update method called');

        $request->validate([
            'nama_pengajar' => 'required|string|max:255',
            'id_program' => 'required|exists:program,id_program',
            'foto_pengajar' => 'nullable|file|mimes:jpg,png,jpeg',
        ]);

        // \Log::info('Validation passed');
        
        $pengajar = Pengajar::findOrFail($id);

        $pengajar->nama_pengajar = $request->input('nama_pengajar');
        $pengajar->id_program = $request->input('id_program');

        if ($request->hasFile('foto_pengajar')) {
            // Hapus foto lama jika ada
            if ($pengajar->foto_pengajar) {
                // \Log::info('Deleting old photo: ' . $pengajar->foto_pengajar);
                Storage::disk('public')->delete($pengajar->foto_pengajar);
            }
            // Simpan foto baru
            
            $filePath = $request->file('foto_pengajar')->store('fotos', 'public');
            $pengajar->update(['foto_pengajar' => $filePath]);
            // \Log::info('New photo saved: ' . $fotoPath);
        }

        // if ($request->hasFile('foto_pengajar')) {
        //     $fotoPath = $request->file('foto_pengajar')->store('fotos', 'public');
        //     $pengajar->update(['foto_pengajar' => $fotoPath]);
        // }
    
        $pengajar->save();
        // \Log::info('Pengajar saved');

        // // $pengajar->update($request->only('nama_pengajar', 'id_program'));

        return redirect()->route('pengajar.index')->with('success', 'Pengajar updated successfully.');
    }

    public function destroy(Pengajar $pengajar)
    {
        // try {
        //     $pengajar = Pengajar::findOrFail($id);

        //     // Hapus foto pengajar dari penyimpanan jika ada
        //     if ($pengajar->foto_pengajar) {
        //         Storage::disk('public')->delete($pengajar->foto_pengajar);
        //     }

        //     $pengajar->delete();

        //     return redirect()->route('pengajar.index')->with('success', 'Pengajar berhasil dihapus.');
        // } catch (\Exception $e) {
        //     // Tangani kesalahan jika pengajar tidak ditemukan atau kesalahan lainnya
        //     return redirect()->route('pengajar.index')->with('error', 'Gagal menghapus pengajar.');
        // }
    


        // $pengajar = Pengajar::findOrFail($id);
        // $pengajar->delete();

        // return redirect()->route('pengajar.index');
        
        $pengajar->delete();
        return redirect()->route('pengajar.index')->with('success', 'Foto berhasil dihapus.');
    }




     // public function index()
    // {
    //     $pengajars = Pengajar::with('program')->get();
    //     return Inertia::render('Pengajar/Index', ['pengajars' => $pengajars]);
    // }

    // public function create()
    // {
    //     $programs = Program::all();
    //     return Inertia::render('Pengajar/Create', ['programs' => $programs]);
    // }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'nama_pengajar' => 'required|string|max:255',
    //         'id_program' => 'required|exists:programs,id_program',
    //         'foto_pengajar' => 'required|string',
    //     ]);

    //     Pengajar::create($request->all());

    //     return redirect()->route('pengajar.index');
    // }

    // public function edit($id)
    // {
    //     $pengajar = Pengajar::findOrFail($id);
    //     $programs = Program::all();
    //     return Inertia::render('Pengajar/Edit', [
    //         'pengajar' => $pengajar,
    //         'programs' => $programs,
    //     ]);
    // }

    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'nama_pengajar' => 'required|string|max:255',
    //         'id_program' => 'required|exists:program,id_program',
    //         'foto_pengajar' => 'nullable|file|mimes:jpg,png,jpeg',
    //     ]);

    //     $pengajar = Pengajar::findOrFail($id);

    //     $pengajar->nama_pengajar = $request->input('nama_pengajar');
    //     $pengajar->id_program = $request->input('id_program');

    //     if ($request->hasFile('foto_pengajar')) {
    //         $filePath = $request->file('foto_pengajar')->store('fotos', 'public');
    //         $pengajar->update(['foto_pengajar' => $filePath]);
    //     }

    //     $pengajar->save();

    //     return redirect()->route('pengajar.index');
    // }

    // public function destroy($id)
    // {
    //     $pengajar = Pengajar::findOrFail($id);
    //     $pengajar->delete();

    //     return redirect()->route('pengajar.index');
    // }

}