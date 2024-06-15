<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GalerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Dummy binary data for foto_pengajar
        $dummyImageContent = str_repeat('0', 100); // Binary data dummy

        for ($i = 0; $i < 10; $i++) {
        DB::table('galery')->insert([
            'foto' => $dummyImageContent,
        ]);
    }
  }
}