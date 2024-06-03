<?php

namespace App\Http\Controllers;

use App\Models\Testimoni;
use Illuminate\Http\Request;
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
        ]);
        $testimoni= [
            'isi_testimoni'=>$request->isi_testimoni,
            'nama_testimoni'=>$request->nama_testimoni,
            'status_testimoni'=>$request->status_testimoni,
        ];
        // Testimoni::create($request->all($testimoni));
        Testimoni::create($testimoni);
        return redirect()->to('testimoni')->with('success', 'Berhasil Menambahkan Data');
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
        ]);
        $testimoni= [
            'isi_testimoni'=>$request->isi_testimoni,
            'nama_testimoni'=>$request->nama_testimoni,
            'status_testimoni'=>$request->status_testimoni,
        ];
        $testimoni = Testimoni::findOrFail($id)->update($testimoni);
        // $testimoni = Testimoni::findOrFail($id)

        return redirect()->to('testimoni');
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