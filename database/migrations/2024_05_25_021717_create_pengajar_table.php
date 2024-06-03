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
        Schema::create('pengajar', function (Blueprint $table) {
            $table->id('id_pengajar');
            $table->string('nama_pengajar');
            $table->unsignedBigInteger('id_program');
            $table->foreign('id_program')->references('id_program')->on('program')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
            $table->string('foto_pengajar')->nullable();

           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengajar');
    }
};