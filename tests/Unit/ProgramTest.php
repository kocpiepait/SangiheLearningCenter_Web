<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Program;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProgramTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_creates_a_program()
    {
        // Menyimpan program baru ke database
        $program = Program::create([
            'nama_program' => 'My First Program',
            'detail_program' => 'This is the detail of my first program.'
        ]);

        // Memeriksa apakah program tersimpan di database
        $this->assertDatabaseHas('program', [
            'nama_program' => 'My First Program'
        ]);
    }

    /** @test */
    public function it_updates_a_program()
    {
        // Membuat program baru
        $program = Program::create([
            'nama_program' => 'Old Name',
            'detail_program' => 'Old description.'
        ]);

        // Memperbarui program
        $program->update([
            'nama_program' => 'New Name',
            'detail_program' => 'New description.'
        ]);

        // Memeriksa apakah program telah diperbarui di database
        $this->assertDatabaseHas('program', [
            'id_program' => $program->id_program,
            'nama_program' => 'New Name'
        ]);
    }

    /** @test */
    public function it_deletes_a_program()
    {
        // Membuat program baru
        $program = Program::create([
            'nama_program' => 'Name to be deleted',
            'detail_program' => 'Description to be deleted.'
        ]);

        // Menghapus program
        $program->delete();

        // Memeriksa apakah program telah dihapus dari database
        $this->assertDatabaseMissing('program', [
            'id_program' => $program->id_program
        ]);
    }
}



// use Illuminate\Foundation\Testing\RefreshDatabase;
// use Tests\TestCase;
// use App\Models\Program;
// use App\Models\Pengajar;
// use App\Models\Peserta;

// class ProgramTest extends TestCase
// {
//     use RefreshDatabase;

//     public function test_can_create_program_with_related_models()
//     {
//         $program = Program::factory()->create();
//         $pengajar = Pengajar::factory()->create(['id_program' => $program->id_program]);
//         $peserta = Peserta::factory()->create(['id_program' => $program->id_program]);

//         $this->assertDatabaseHas('program', $program->toArray());
//         $this->assertDatabaseHas('pengajar', $pengajar->toArray());
//         $this->assertDatabaseHas('peserta', $peserta->toArray());
//     }

//     public function test_can_update_program_with_related_models()
//     {
//         $program = Program::factory()->create();
//         $pengajar = Pengajar::factory()->create(['id_program' => $program->id_program]);
//         $peserta = Peserta::factory()->create(['id_program' => $program->id_program]);

//         $newProgramData = Program::factory()->raw();

//         $program->update($newProgramData);

//         $this->assertDatabaseHas('program', $newProgramData);
//         $this->assertDatabaseHas('pengajar', $pengajar->toArray());
//         $this->assertDatabaseHas('peserta', $peserta->toArray());
//     }

//     public function test_can_delete_program_and_related_models()
//     {
//         $program = Program::factory()->create();
//         $pengajar = Pengajar::factory()->create(['id_program' => $program->id_program]);
//         $peserta = Peserta::factory()->create(['id_program' => $program->id_program]);

//         $program->delete();

//         $this->assertDeleted($program);
//         $this->assertDeleted($pengajar);
//         $this->assertDeleted($peserta);
//     }
// }