<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengajar extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_pengajar';

    protected $fillable = [
        'nama_pengajar',
        'foto_pengajar',
        'pengalaman',
        'status',
    ];

    public function programs()
    {
        return $this->hasMany(Program::class, 'id_pengajar','id_pengajar');
    }

    public function pesertas()
    {
        return $this->hasMany(Peserta::class, 'id_pengajar', 'id_pengajar');
    }
    protected $table = 'pengajar';
    public $timestamps = false;
}