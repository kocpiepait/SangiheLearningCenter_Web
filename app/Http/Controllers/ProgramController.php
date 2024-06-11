<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $programs = Program::all();
        // $programs = Program::with('pengajar', 'peserta', 'processing')->get();
        return Inertia::render('Program/Index', ['programs' => $programs]);
        // return Inertia::render('Dashboard', ['programs' => $programs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Program/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_program' => 'required',
            'detail_program' => 'required',
        ]);
        $program = [
            'nama_program'=>$request->nama_program,
            'detail_program'=>$request->detail_program,
        ];


        // Program::create($request->all($data));
        Program::create($program);

        return redirect()->to('program')->with('success', 'Berhasil Menambahkan Data');
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
    public function edit(string $id_program)
    {
        $program = Program::findOrFail($id_program);
        // $program = Program::all();
        return Inertia::render('Program/Edit', ['program' => $program]);
        //  return Inertia::render('Program/Edit')->with ('Program', $program);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id_program)
    {
        $request->validate([
            'nama_program' => 'required',
            'detail_program' => 'required',
        ]);
        $program = [
            'nama_program'=>$request->nama_program,
            'detail_program'=>$request->detail_program,
        ];

        $program = Program::findOrFail($id_program)->update($program);
        // $program->update($request->all());

        return redirect()->to('program');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Program::findOrFail($id)->delete();
        return redirect()->to('program');
    }
}