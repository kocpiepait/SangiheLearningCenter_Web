<?php

namespace App\Http\Controllers;

use App\Models\Galery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleryController extends Controller
{
    public function index()
    {
        $galeries = Galery::all();
        return Inertia::render('Galery/Index', ['galeries' => $galeries]);
    }

    public function create()
    {
        return Inertia::render('Galery/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'foto' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $filePath = $request->file('foto')->store('images', 'public');

        Galery::create([
            'foto' => $filePath,
        ]);

        return redirect()->route('galery.index')->with('success', 'Gambar berhasil diunggah.');
    }

    public function edit(Galery $galery)
    {
        return Inertia::render('Galery/Edit', ['galery' => $galery]);
    }

    public function update(Request $request, Galery $galery)
    {
        $request->validate([
            'foto' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            $filePath = $request->file('foto')->store('images', 'public');
            $galery->update(['foto' => $filePath]);
        }

        return redirect()->route('galery.index')->with('success', 'Gambar berhasil diperbarui.');
    }

    public function destroy(Galery $galery)
    {
        $galery->delete();
        return redirect()->route('galery.index')->with('success', 'Gambar berhasil dihapus.');
    }


























    // /**
    //  * Display a listing of the resource.
    //  */
    // public function index()
    // {
    //     $galeries = Galery::all();
    //     return Inertia::render('Galery/Index', ['galeries' => $galeries]);
    // }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     return Inertia::render('Galery/Create');
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'foto' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    //     ]);

    //     $filePath = $request->file('foto')->store('images', 'public');

    //     $galery = Galery::create([
    //         'foto' => $filePath,
    //     ]);

    //     return redirect()->to('galery');
    // }

    // /**
    //  * Display the specified resource.
    //  */
    // public function show(string $id)
    // {
    //     //    
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(string $id)
    // {
    //     $galery = Galery::findOrFail($id);
    //     return Inertia::render('Galery/Edit', ['galery' => $galery]);
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function update(Request $request, string $id)
    // {
    //     $galery = Galery::findOrFail($id);

    //     $request->validate([
    //         'foto' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    //     ]);

    //     if ($request->hasFile('foto')) {
    //         // Delete the old image
    //         if (Storage::disk('public')->exists($galery->foto)) {
    //             Storage::disk('public')->delete($galery->foto);
    //         }

    //         // Store the new image
    //         $filePath = $request->file('foto')->store('images', 'public');
    //         $galery->update(['foto' => $filePath]);
    //     }

    //     return redirect()->to('galery');
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(string $id)
    // {
    //     $galery = Galery::findOrFail($id);

    //     // Delete the image file
    //     if (Storage::disk('public')->exists($galery->foto)) {
    //         Storage::disk('public')->delete($galery->foto);
    //     }

    //     $galery->delete();

    //     return redirect()->to('galery');
    // }
}