<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Processing extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_kursus';

    protected $fillable = ['id_pengajar', 'nama_pengajar', 'id_peserta', 'nama_peserta', 'id_program', 'nama_program', 'jumlah_peserta', 'tahun_ajaran'];

    public function pengajar()
    {
        return $this->belongsTo(Pengajar::class, 'id_pengajar');
    }

    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'id_peserta');
    }

    public function program()
    {
        return $this->belongsTo(Program::class, 'id_program');
    }
    protected $table = 'processing';
    public $timestamps = false;
}