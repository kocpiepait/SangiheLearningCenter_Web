<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berita>
 */
class BeritaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'headline_berita' => fake()->sentence(),
            'isi_berita' => fake()->realText(), // Menghasilkan teks acak dengan panjang 200 karakter
            'tanggal_publikasi' => fake()->date(), // Menggunakan tanggal acak dalam rentang 1 bulan terakhir
            'corresponden' => fake()->sentence(),
            'media' => fake()->imageUrl(), //
        ];
    }
}
