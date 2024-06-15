<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimoni extends Model
{
    use HasFactory;
    protected $fillable = [
        'isi_testimoni',
        'nama_testimoni',
        'status_testimoni',
        'gambar_testimoni',
    ];

    protected $table = 'testimoni';
    public $timestamps = false;
}