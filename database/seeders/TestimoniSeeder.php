<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TestimoniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Dummy binary data for foto_pengajar
        $dummyImageContent = str_repeat('0', 100); // Binary data dummy

        for ($i = 0; $i < 10; $i++) {
        DB::table('testimoni')->insert([
            'isi_testimoni' => Str::random(50),
            'nama_testimoni' => Str::random(10,),
            'status_testimoni' => Str::random(10),
            'gambar_testimoni' =>  $dummyImageContent,
        ]);
    }
  }
}