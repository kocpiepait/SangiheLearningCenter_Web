<?php

namespace Database\Factories;

use App\Models\Peserta;
use App\Models\Program;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pengajar>
 */
class PengajarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_pengajar' => fake()->name(),
            'foto_pengajar' => fake()->imageUrl(),
            'pengalaman' => fake()->realText(),
            'status'=> fake()->randomElement([
                        'Direktur',
                        'Founder',
                        'Marketing Direktur', 
                        'Pengajar'
            ]),
            'id_program' => 1,
        ];
    }
}
