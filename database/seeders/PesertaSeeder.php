<?php


namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Program;

class PesertaSeeder extends Seeder
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

        // Loop untuk menambahkan data peserta
        for ($i = 0; $i < 10; $i++) {
            $tanggal_lahir = date('Y-m-d', strtotime('-'.mt_rand(18, 40).' years'));

            DB::table('peserta')->insert([
                'nama_peserta' => Str::random(10),
                'id_program' => $programs->random()->id_program, // Menggunakan id_program dari data yang ada
                'usia_peserta' => mt_rand(18, 60), // Menghasilkan usia acak antara 18 dan 60 tahun menggunakan mt_rand()
                'alamat' => Str::random(10),
                'jenis_kelamin' => Str::random(10),
                'TTL' => $tanggal_lahir,
            ]);
      }
   } 
}