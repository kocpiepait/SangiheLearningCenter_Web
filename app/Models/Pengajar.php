<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengajar extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_pengajar';

    protected $fillable = ['nama_pengajar', 'id_program', 'foto_pengajar'];

    public function program()
    {
        return $this->belongsTo(Program::class, 'id_program');
    }
    protected $table = 'pengajar';
    public $timestamps = false;
}