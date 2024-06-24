<?php

namespace Database\Seeders;

use App\Models\Berita;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class BeritaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Berita::factory()->count(10)->create();

        //  // Dummy binary data for foto_pengajar
        //  $dummyImageContent = str_repeat('0', 100); // Binary data dummy

        // for ($i = 0; $i < 10; $i++) {
        //     $randomDate = Carbon::parse('-'.mt_rand(1, 30).' days');
        //     echo $randomDate->toDateString(); // Contoh output: "2023-05-25" (tanggal 25 Mei 2023)

        // DB::table('berita')->insert([
        //     'headline_berita' => fake()->sentence(),
        //     'isi_berita' => fake()->paragraph(5, true), // Menghasilkan teks acak dengan panjang 200 karakter
        //     'tanggal_publikasi' => fake()->date(), // Menggunakan tanggal acak dalam rentang 1 bulan terakhir
        //     'corresponden' => fake()->realText(),
        //     'media' => fake()->imageUrl(), // Data dummy binary
        // ]);
    }
}
