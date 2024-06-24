<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimoni>
 */
class TestimoniFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'isi_testimoni' => fake()->text(),
            'nama_testimoni' => fake()->name(),
            'status_testimoni' => fake()->sentence(),
            'gambar_testimoni' =>  fake()->imageUrl(),
        ];
    }
}
