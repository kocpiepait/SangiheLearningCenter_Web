<?php

namespace Database\Factories;

use App\Models\Pengajar;
use App\Models\Peserta;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Program>
 */
class ProgramFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_program' => fake()->sentence(),
            'img_program' => fake()->imageUrl(),
            'deskripsi' => fake()->realText(),
            'lesson' => fake()->realText(),
        ];
    }
}
