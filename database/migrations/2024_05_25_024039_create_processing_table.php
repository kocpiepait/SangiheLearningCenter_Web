<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('processing', function (Blueprint $table) {
            $table->id('id_kursus');
            $table->unsignedBigInteger('id_pengajar');
            $table->foreign('id_pengajar')->references('id_pengajar')->on('pengajar')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
            $table->string('nama_pengajar');
            $table->unsignedBigInteger('id_peserta');
            $table->foreign('id_peserta')->references('id_peserta')->on('peserta')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
            $table->string('nama_peserta');
            $table->unsignedBigInteger('id_program');
            $table->foreign('id_program')->references('id_program')->on('program')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
            $table->string('nama_program');
            $table->integer('jumlah_peserta');
            $table->year('tahun_ajaran');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('processing');
    }
};