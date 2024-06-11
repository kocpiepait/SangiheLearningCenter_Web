<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_program';

    protected $fillable = ['nama_program', 'detail_program'];

    public function pengajars()
    {
        return $this->hasMany(Pengajar::class, 'id_program');
    }

    public function pesertas()
    {
        return $this->hasMany(Peserta::class, 'id_program');
    }
    protected $table = 'program';
    public $timestamps = false;
}