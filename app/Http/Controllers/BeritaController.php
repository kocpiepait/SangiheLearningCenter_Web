<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
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
            'media' => 'required|string',
            'headline_berita' => 'required|string',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'corresponden' => 'required|string',
        ], [
            'headline_berita.required'=>'Headline berita wajib diisi',
            'headline_berita.string'=>'Headline berita sudah ada',
            'isi_berita.required'=>'Isi berita wajib diisi',
            'isi_berita.string'=>'Isi berita sudah ada',
        ]);
        $berita = [
            'media'=>$request->media,
            'headline_berita'=>$request->headline_berita,
            'isi_berita'=>$request->isi_berita,
            'tanggal_publikasi'=>$request->tanggal_publikasi,
            'coresponden'=>$request->coresponden,
        ];

            Berita::create($request->all($berita));
        // Berita::create($berita);
        return redirect()->to('berita')->with('success', 'Berhasil Menambahkan Data');
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
            'media' => 'required|string',
            'headline_berita' => 'required|string',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'corresponden' => 'required|string',
        ]);
        $berita = [
            'media'=>$request->media,
            'headline_berita'=>$request->headline_berita,
            'isi_berita'=>$request->isi_berita,
            'tanggal_publikasi'=>$request->tanggal_publikasi,
            'coresponden'=>$request->coresponden,
        ];

        // $berita = berita::findOrFail($id);
        $berita = Berita::findOrFail($id)->update($berita);
        // $berita->update($request->all());

        return redirect()->to('berita');
    }

    public function destroy(string $id)
    {
        // $berita->delete();
        Berita::findOrFail($id)->delete();
        // $berita->delete();

        return redirect()->to('berita');
    }
}