<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_peserta';

    protected $fillable = [
        'nama_peserta', 
        'id_program',
        'id_pengajar',
        'usia_peserta', 
        'alamat', 
        'jenis_kelamin', 
        'TTL'
    ];

    public function program()
    {
        return $this->belongsTo(Program::class, 'id_program','id_program');
    }

    public function pengajar()
    {
        return $this->belongsTo(Pengajar::class, 'id_pengajar','id_pengajar');
    }
    protected $table = 'peserta';
    public $timestamps = false;
}