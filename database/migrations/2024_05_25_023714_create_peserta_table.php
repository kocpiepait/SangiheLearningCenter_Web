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
        Schema::create('peserta', function (Blueprint $table) {
            $table->id('id_peserta');
            $table->string('nama_peserta');
            $table->unsignedBigInteger('id_program');
            $table->foreign('id_program')->references('id_program')->on('program')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
            $table->integer('usia_peserta');
            $table->string('alamat');
            $table->string('jenis_kelamin');
            $table->date('TTL');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peserta');
    }
};