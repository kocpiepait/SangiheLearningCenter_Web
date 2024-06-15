<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Pengajar;
use App\Models\Program;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PengajarTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_a_pengajar()
    {
        // Membuat data program
        $program = Program::create([
            'nama_program' => 'Membaca',
            'detail_program' => 'Blablabla',
        ]);

        // Membuat data pengajar baru yang terkait dengan program
        $pengajar = Pengajar::create([
            'nama_pengajar' => 'Raju',
            'id_program' => $program->id_program,
            'foto_pengajar' => 'binary_data_here',
        ]);

        // Memastikan data pengajar berhasil disimpan di dalam basis data
        $this->assertDatabaseHas('pengajar', [
            'id_pengajar' => $pengajar->id_pengajar,
            'id_program' => $program->id_program,
        ]);
    }

    /** @test */
    public function it_can_update_a_pengajar()
    {
        // Membuat data program
        $program = Program::create([
            'nama_program' => 'Membaca',
            'detail_program' => 'Blablabla',
        ]);

        // Membuat data pengajar baru yang terkait dengan program
        $pengajar = Pengajar::create([
            'nama_pengajar' => 'Raju',
            'id_program' => $program->id_program,
            'foto_pengajar' => 'binary_data_here',
        ]);

        // Memperbarui data pengajar
        $pengajar->update([
            'nama_pengajar' => 'Raju',
        ]);

        // Memastikan data pengajar berhasil diperbarui di dalam basis data
        $this->assertDatabaseHas('pengajar', [
            'id_pengajar' => $pengajar->id_pengajar,
            'nama_pengajar' => 'Raju',
        ]);
    }

    /** @test */
    public function it_can_delete_a_pengajar()
    {
        // Membuat data program
        $program = Program::create([
            'nama_program' => 'Membaca',
            'detail_program' => 'Blablabla',
        ]);

        // Membuat data pengajar baru yang terkait dengan program
        $pengajar = Pengajar::create([
            'nama_pengajar' => 'Raju',
            'id_program' => $program->id_program,
            'foto_pengajar' => 'binary_data_here',
        ]);

        // Menghapus data pengajar
        $pengajar->delete();

        // Memastikan data pengajar berhasil dihapus dari basis data
        $this->assertDatabaseMissing('pengajar', ['id_pengajar' => $pengajar->id_pengajar]);
    }

    /** @test */
    public function it_can_retrieve_a_pengajar_with_related_program()
    {
        // Membuat data program
        $program = Program::create([
            'nama_program' => 'Membaca',
            'detail_program' => 'Blablabla',
        ]);

        // Membuat data pengajar baru yang terkait dengan program
        $pengajar = Pengajar::create([
            'nama_pengajar' => 'Raju',
            'id_program' => $program->id_program,
            'foto_pengajar' => 'binary_data_here',
        ]);

        // Mendapatkan data pengajar dari basis data bersama dengan program yang terkait
        $retrieved_pengajar = Pengajar::with('program')->find($pengajar->id_pengajar);

        // Memastikan data pengajar yang diperoleh sesuai dengan yang diharapkan
        $this->assertEquals($pengajar->nama_pengajar, $retrieved_pengajar->nama_pengajar);
        $this->assertEquals($program->nama_program, $retrieved_pengajar->program->nama_program);
    }
}


// namespace Tests\Unit;

// use Tests\TestCase;
// use App\Models\Pengajar;
// use Illuminate\Foundation\Testing\RefreshDatabase;

// class PengajarTest extends TestCase
// {
//     use RefreshDatabase;

//     /** @test */
//     public function it_creates_a_pengajar()
//     {
//         // Menyimpan pengajar baru ke database
//         $pengajar = Pengajar::create([
//             'nama_pengajar' => 'John Doe',
//             'id_program' => 1,
//             'foto_pengajar' => 'binary_data_here',
//         ]);

//         // Memeriksa apakah pengajar tersimpan di database
//         $this->assertDatabaseHas('pengajar', [
//             'id' => $pengajar->id,
//             'nama_pengajar' => 'John Doe',
//             'id_program' => 1,
//             // Perhatikan bahwa foto_pengajar akan menjadi data binary, sehingga harus diuji secara manual
//         ]);

//     }

//     /** @test */
//     public function it_updates_a_pengajar()
//     {
//         // Membuat pengajar baru
//         $pengajar = Pengajar::create([
//             'nama_pengajar' => 'Jane Smith',
//             'id_program' => 2,
//             'foto_pengajar' => 'binary_data_here',
//         ]);

//         // Memperbarui pengajar
//         $pengajar->update([
//             'nama_pengajar' => 'Jane Doe',
//             'id_program' => 3,
//             // foto_pengajar dapat diupdate dengan data binary yang baru
//         ]);

//         // Memeriksa apakah pengajar telah diperbarui di database
//         $this->assertDatabaseHas('pengajar', [
//             'id' => $pengajar->id,
//             'nama_pengajar' => 'Jane Doe',
//             'id_program' => 3,
//             // Perhatikan bahwa foto_pengajar akan menjadi data binary, sehingga harus diuji secara manual
//         ]);
//     }

//     /** @test */
//     public function it_deletes_a_pengajar()
//     {
//         // Membuat pengajar baru
//         $pengajar = Pengajar::create([
//             'nama_pengajar' => 'Adam Smith',
//             'id_program' => 4,
//             'foto_pengajar' => 'binary_data_here',
//         ]);

//         // Menghapus pengajar
//         $pengajar->delete();

//         // Memeriksa apakah pengajar telah dihapus dari database
//         $this->assertDatabaseMissing('pengajar', [
//             'id_pengajar' => $pengajar->id_pengajar
//         ]);
//     }
    
//      /** @test */
//      public function it_can_retrieve_a_pengajar()
//      {
//          // Membuat data pengajar baru
//          $pengajar = Pengajar::create([
//              'nama_pengajar' => 'Eve Johnson',
//              'id_program' => 5,
//              'foto_pengajar' => 'binary_data_here',
//          ]);
 
//          // Mendapatkan data pengajar dari basis data berdasarkan ID
//          $retrieved_pengajar = Pengajar::find($pengajar->id);
 
//          // Memastikan data pengajar yang diperoleh sesuai dengan yang diharapkan
//          $this->assertEquals($pengajar->nama_pengajar, $retrieved_pengajar->nama_pengajar);
//          $this->assertEquals($pengajar->id_program, $retrieved_pengajar->id_program);
//          // Perhatikan bahwa foto_pengajar akan menjadi data binary, sehingga harus diuji secara manual
//      }
// }