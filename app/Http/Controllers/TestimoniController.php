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
        $request->validate([
            'isi_testimoni' => 'required|string',
            'nama_testimoni' => 'required|string',
            'status_testimoni' => 'required|string',
            'gambar_testimoni' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
        ]); 
        
        $gambarPath = $request->file('gambar_testimoni') ? $request->file('gambar_testimoni')->store('fotos', 'public') : null;
        // $gambarPath = $request->file('gambar_testimoni')->store('gambar_testimoni', 'public');

        // Cek apakah ada file gambar yang diunggah
    // if ($request->hasFile('gambar_testimoni')) {
    //     // Simpan file gambar ke direktori penyimpanan
    //     $gambarPath = $request->file('gambar_testimoni')->store('fotos', 'public');
    // } else {
    //     // Jika tidak ada file yang diunggah, set path gambar menjadi null
    //     $gambarPath = null;
    // }
    
            
    // // Buat entri baru dalam tabel Testimoni dengan nilai gambar_testimoni yang disediakan
        Testimoni::create([
            'isi_testimoni' => $request->isi_testimoni,
            'nama_testimoni' => $request->nama_testimoni,
            'status_testimoni' => $request->status_testimoni,
            'gambar_testimoni' => $gambarPath
        ]);

        return redirect()->to('testimoni');
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