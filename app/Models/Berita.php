<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;
    protected $fillable = [
        'media', 
        'headline_berita', 
        'isi_berita', 
        'tanggal_publikasi', 
        'corresponden'
    ];
    protected $table = 'berita';
    public $timestamps = false;
    
    // protected $casts = [
    //     'media' => 'binary',
    // ];
}