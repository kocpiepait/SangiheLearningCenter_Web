<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Program;

class PengajarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pastikan tabel program memiliki data yang diperlukan
        $programs = Program::all();

        // Check if there are any programs available
        if ($programs->isEmpty()) {
            // Jika tabel program kosong, tambahkan data dummy
            for ($i = 0; $i < 10; $i++) {
                Program::create([
                    'nama_program' => Str::random(10),
                    'detail_program' => Str::random(50),
                ]);
            }
            $programs = Program::all(); // Reload programs after inserting dummy data
        }

        // Dummy binary data for foto_pengajar
        $dummyImageContent = str_repeat('0', 100); // Binary data dummy

        for ($i = 0; $i < 10; $i++) {
            DB::table('pengajar')->insert([
                'nama_pengajar' => Str::random(10),
                'id_program' => $programs->random()->id_program, // Menggunakan id_program dari data yang ada
                'foto_pengajar' => $dummyImageContent, // Data dummy binary
            ]);
        }
    }
}