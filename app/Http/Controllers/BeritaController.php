<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Import class Storage untuk mengelola penyimpanan file
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        $beritas = Berita::all();
        return Inertia::render('Berita/Index', [
            'beritas' => $beritas,
        ]);
    }

    public function create()
    {
        return Inertia::render('Berita/Create', [
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'headline_berita' => 'required|string|max:255',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'corresponden' => 'required|string|max:255',
            'media' => 'required|image',
        ]);

        $path = $request->file('media')->store('public/media');

        Berita::create([
            'headline_berita' => $request->headline_berita,
            'isi_berita' => $request->isi_berita,
            'tanggal_publikasi' => $request->tanggal_publikasi,
            'corresponden' => $request->corresponden,
            'media' => $path,
        ]);

        return redirect()->route('beritas.index')->with('success', 'Berita berhasil ditambahkan.');
    }

    public function edit(string $id)
    {
        $berita = berita::findOrFail($id);
        return Inertia::render('Berita/Edit', ['berita' => $berita]);
        // return Inertia::render('Berita/Edit')->with ('berita', $berita);
    }

    public function update(Request $request,  $id)
    {
        $request->validate([
            'headline_berita' => 'required|string|max:255',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'corresponden' => 'required|string|max:255',
            'media' => 'nullable|image',
        ]);

        $berita = Berita::findOrFail($id);

        $berita->headline_berita = $request->input('headline_berita');
        $berita->isi_berita = $request->input('isi_berita');
        $berita->tanggal_publikasi = $request->input('tanggal_publikasi');
        $berita->corresponden = $request->input('corresponden');

        // $berita->headline_berita = $request->input('headline_berita');

        if ($request->hasFile('media')) {
            // Hapus foto lama jika ada
            if ($berita->media) {
                Storage::disk('public')->delete($berita->media);
            }
            // Simpan foto baru
            $filePath = $request->file('media')->store('fotos', 'public');
            $berita->media = $filePath;
        }
        $berita->save();

        return redirect()->route('beritas.index')->with('success', 'Berita updated successfully.');
    }

    public function destroy(string $id)
    {
        // $berita->delete();
        Berita::findOrFail($id)->delete();
        // $berita->delete();

        return redirect()->to('beritas');
    }
}