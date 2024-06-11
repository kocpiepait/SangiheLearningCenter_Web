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
        return Inertia::render('Berita/Index', ['beritas' => $beritas]);
    }

    public function create()
    {
        return Inertia::render('Berita/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'headline_berita' => 'required|string',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'corresponden' => 'required|string',
            'media' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
        ]); 
        // [
        //     'headline_berita.required'=>'Headline berita wajib diisi',
        //     'headline_berita.string'=>'Headline berita sudah ada',
        //     'isi_berita.required'=>'Isi berita wajib diisi',
        //     'isi_berita.string'=>'Isi berita sudah ada',
        // ]);

        
        $fotoPath = $request->file('media') ? $request->file('media')->store('fotos', 'public') : null;
        // $fotoPath = $request->file('media')->store('fotos', 'public');

        // $path = null;
        // if ($request->hasFile('media')) {
        //     $path = $request->file('media')->store('media', 'public');
        // }

        Berita::create([
            'headline_berita' => $request->headline_berita,
            'isi_berita' => $request->isi_berita,
            'tanggal_publikasi' => $request->tanggal_publikasi,
            'corresponden' => $request->corresponden,
            'media' =>$fotoPath,
        ]);
        // $berita = [
        //     'media'=>$request->media,
        //     'headline_berita'=>$request->headline_berita,
        //     'isi_berita'=>$request->isi_berita,
        //     'tanggal_publikasi'=>$request->tanggal_publikasi,
        //     'coresponden'=>$request->coresponden,
        // ];

        return redirect()->to('berita');

            // Berita::create($request->all($berita));
        // Berita::create($berita);
        // return redirect()->to('berita')->with('success', 'Berhasil Menambahkan Data');
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
            'headline_berita' => 'required|string',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'corresponden' => 'required|string',
            'media' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        // $berita = [
        //     'media'=>$request->media,
        //     'headline_berita'=>$request->headline_berita,
        //     'isi_berita'=>$request->isi_berita,
        //     'tanggal_publikasi'=>$request->tanggal_publikasi,
        //     'coresponden'=>$request->coresponden,
        // ];

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
        $berita->save();

        return redirect()->route('berita.index')->with('success', 'Berita updated successfully.');

        // return redirect()->to('berita');
    }

    public function destroy(string $id)
    {
        // $berita->delete();
        Berita::findOrFail($id)->delete();
        // $berita->delete();

        return redirect()->to('berita');
    }
}