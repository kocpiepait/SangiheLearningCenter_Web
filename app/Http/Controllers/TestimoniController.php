<?php

namespace App\Http\Controllers;

use App\Models\Testimoni;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Import class Storage untuk mengelola penyimpanan file
use Inertia\Inertia;

class TestimoniController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonis = Testimoni::all();
        return Inertia::render('Testimoni/Index', ['testimonis' => $testimonis]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Testimoni/Create');
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_testimoni' => 'required|string|max:255',
            'gambar_testimoni' => 'required|image|max:25048',
            'isi_testimoni' => 'required|string',
            'status_testimoni' => 'required|string|max:255',
        ]);
        
        if ($request->hasFile('gambar_testimoni')) {
            $fileName = time() . '.' . $request->gambar_testimoni->extension();
            $request->gambar_testimoni->move(public_path('images'), $fileName);
            $validatedData['gambar_testimoni'] = $fileName;
        }

        Testimoni::create($validatedData);
        return redirect()->route('testimoni.index')->with('success', 'Testimoni berhasil ditambahkan.');
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
    public function edit(string $id)
    {
        
        $testimoni = Testimoni::findOrFail($id);
        return Inertia::render('Testimoni/Edit', ['testimoni' => $testimoni]);
        // return Inertia::render('Berita/Edit')->with ('berita', $berita);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'isi_testimoni' => 'required|string',
            'nama_testimoni' => 'required|string',
            'status_testimoni' => 'required|string',
            'gambar_testimoni' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $testimoni = Testimoni::findOrFail($id);

        $testimoni->isi_testimoni = $request->input('isi_testimoni');
        $testimoni->nama_testimoni = $request->input('nama_testimoni');
        $testimoni->status_testimoni = $request->input('status_testimoni');

        // $berita->headline_berita = $request->input('headline_berita');

        if ($request->hasFile('gambar_testimoni')) {
            // Hapus foto lama jika ada
            if ($testimoni->gambar_testimoni) {
                Storage::disk('public')->delete($testimoni->gambar_testimoni);
            }
            // Simpan foto baru
            $filePath = $request->file('gambar_testimoni')->store('fotos', 'public');
            $testimoni->gambar_testimoni = $filePath;
        }
        // if ($request->hasFile('media')) {
        //     // Hapus foto lama jika ada
        //     if ($berita->media) {
        //         // \Log::info('Deleting old photo: ' . $pengajar->foto_pengajar);
        //         Storage::disk('public')->delete($berita->media);
        //     }
        //     // Simpan foto baru
            
        //     $filePath = $request->file('media')->store('fotos', 'public');
        //     $berita->update(['media' => $filePath]);
        //     // \Log::info('New photo saved: ' . $fotoPath);
        // }

        // $berita = berita::findOrFail($id);
        // $berita = Berita::findOrFail($id)->update($berita);
        // $berita->update($request->all());
        $testimoni->save();

        return redirect()->route('testimoni.index')->with('success', 'Berita updated successfully.');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Testimoni::findOrFail($id)->delete();
        // $berita->delete();

        return redirect()->to('testimoni');
    }
}