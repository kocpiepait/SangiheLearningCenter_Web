<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Pengajar;
use App\Models\Peserta;
use App\Models\Program;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
    
        User::factory()->create([
            'name' => 'Test User',
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
            'email_verified_at' => time()
        ]);

        $this->call([
            PengajarSeeder::class,
            ProgramSeeder::class,
            PesertaSeeder::class,
            BeritaSeeder::class,
            GalerySeeder::class,
            TestimoniSeeder::class,
        ]);
    }
}
