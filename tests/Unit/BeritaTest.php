<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Berita;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BeritaTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_creates_a_berita()
    {
        // Menyimpan berita baru ke database
        $berita = Berita::create([
            'headline_berita' => 'My First headline news',
            'isi_berita' => 'This is the detail of my first program',
            'tanggal_publikasi' => 'datetime',
            'corresponden' => 'This is the detail of my first program',
            'media' => 'binary_data_here.'
        ]);

        // Memeriksa apakah berita tersimpan di database
        $this->assertDatabaseHas('berita', [
             'headline_berita' => 'My First headline news'
        ]);
    }

    /** @test */
    public function it_updates_a_berita()
    {
        // Membuat berita baru
        $berita = Berita::create([
            'headline_berita' => 'Old News',
            'isi_berita' => 'Old isi',
            'tanggal_publikasi' => 'datetime',
            'corresponden' => 'Old corresponden',
            'media' => 'binary_data_here.'
        ]);

        // Memperbarui berita
        $berita->update([
            'headline_berita' => 'New News',
            'isi_berita' => 'New isi',
            'tanggal_publikasi' => 'datetime',
            'corresponden' => 'New corresponden',
            'media' => 'binary_data_here.'
        ]);

        // Memeriksa apakah berita telah diperbarui di database
        $this->assertDatabaseHas('berita', [
            'id' => $berita->id,
            'headline_berita' => 'New News'
        ]);
    }

    /** @test */
    public function it_deletes_a_berita()
    {
        // Membuat berita baru
        $berita = Berita::create([
            'headline_berita' => 'News to be deleted',
            'isi_berita' => 'Isi to be deleted',
            'tanggal_publikasi' => 'datetime',
            'corresponden' => 'Corresponden to be deleted',
            'media' => 'binary_data_here.'
        ]);

        // Menghapus berita
        $berita->delete();

        // Memeriksa apakah berita telah dihapus dari database
        $this->assertDatabaseMissing('berita', [
            'id' => $berita->id
        ]);
    }
}