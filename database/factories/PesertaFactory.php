<?php

namespace Database\Factories;

use App\Models\Program;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Peserta>
 */
class PesertaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'nama_peserta' => fake()->name(),
           'id_program' =>1,
           'id_pengajar' =>1,
           'usia_peserta' => fake()->randomNumber(),
           'alamat' => fake()->address(),
           'jenis_kelamin' => fake()->randomElement(['laki-laki', 'perempuan']),
           'TTl' => fake()->date(),
        ];
    }
}
