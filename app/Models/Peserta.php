<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_peserta';

    protected $fillable = ['nama_peserta', 'id_program', 'usia_peserta', 'alamat', 'jenis_kelamin', 'TTL'];

    public function program()
    {
        return $this->belongsTo(Program::class, 'id_program');
    }
    protected $table = 'peserta';
    public $timestamps = false;
}