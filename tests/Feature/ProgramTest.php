<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Program;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProgramTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_create_a_program()
    {
        // Mengirim permintaan POST ke endpoint programs
        $response = $this->post('/program', [
            'nama_program' => 'My First Program',
            'detail_program' => 'This is the detail of my first program.'
        ]);

        // Memeriksa apakah permintaan berhasil (status 201)
        $response->assertStatus(201);

        // Memeriksa apakah program tersimpan di database
        $this->assertDatabaseHas('program', [
            'nama_program' => 'My First Program'
        ]);
    }

    /** @test */
    public function program_name_is_required()
    {
        // Mengirim permintaan POST tanpa menyertakan nama_program
        $response = $this->post('/program', [
            'detail_program' => 'This is the detail of my first program.'
        ]);

        // Memeriksa apakah permintaan gagal karena nama_program tidak disertakan
        $response->assertSessionHasErrors('nama_program');

        // Memeriksa apakah program tidak tersimpan di database
        $this->assertDatabaseMissing('program', [
            'detail_program' => 'This is the detail of my first program.'
        ]);
    }

    /** @test */
    public function program_detail_is_required()
    {
        // Mengirim permintaan POST tanpa menyertakan detail_program
        $response = $this->post('/program', [
            'nama_program' => 'My First Program',
        ]);

        // Memeriksa apakah permintaan gagal karena detail_program tidak disertakan
        $response->assertSessionHasErrors('detail_program');

        // Memeriksa apakah program tidak tersimpan di database
        $this->assertDatabaseMissing('program', [
            'nama_program' => 'My First Program',
        ]);
    }

    /** @test */
    public function a_user_can_view_a_program()
    {
        // Membuat program baru
        $program = Program::create([
            'nama_program' => 'My First Program',
            'detail_program' => 'This is the detail of my first program.'
        ]);

        // Mengirim permintaan GET ke endpoint program yang baru dibuat
        $response = $this->get('/program/' . $program->id);

        // Memeriksa apakah permintaan berhasil (status 200)
        $response->assertStatus(200);

        // Memeriksa apakah detail program ditampilkan di halaman
        $response->assertSee($program->detail_program);
    }

    /** @test */
    public function a_user_can_update_a_program()
    {
        // Membuat program baru
        $program = Program::create([
            'nama_program' => 'My First Program',
            'detail_program' => 'This is the detail of my first program.'
        ]);

        // Mengirim permintaan PUT ke endpoint program untuk memperbarui detail_program
        $response = $this->put('/program/' . $program->id, [
            'detail_program' => 'Updated detail of my first program.'
        ]);

        // Memeriksa apakah permintaan berhasil (status 200)
        $response->assertStatus(200);

        // Memeriksa apakah detail_program telah diperbarui di database
        $this->assertDatabaseHas('program', [
            'id_program' => $program->id_program,
            'detail_program' => 'Updated detail of my first program.'
        ]);
    }

    /** @test */
    public function a_user_can_delete_a_program()
    {
        // Membuat program baru
        $program = Program::create([
            'nama_program' => 'My First Program',
            'detail_program' => 'This is the detail of my first program.'
        ]);

        // Mengirim permintaan DELETE ke endpoint program untuk menghapus program
        $response = $this->delete('/program/' . $program->id_program);

        // Memeriksa apakah permintaan berhasil (status 204)
        $response->assertStatus(204);

        // Memeriksa apakah program telah dihapus dari database
        $this->assertDatabaseMissing('program', [
            'id_program' => $program->id_program
        ]);
    }
}