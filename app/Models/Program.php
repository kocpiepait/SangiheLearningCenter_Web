<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_program';

    protected $fillable = [
        'nama_program',
        'deskripsi',
        'img_program',
        'lesson',
        'id_pengajar'
        
    ];

    public function pengajar()
    {
        return $this->belongsTo(Pengajar::class, 'id_pengajar', 'id_pengajar');
    }

    public function pesertas()
    {
        return $this->hasMany(Peserta::class, 'id_program','id_program');
    }
    protected $table = 'program';
    public $timestamps = false;
}