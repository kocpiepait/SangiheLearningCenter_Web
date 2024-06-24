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
        Schema::create('program', function (Blueprint $table) {
            $table->id('id_program');
            $table->unsignedBigInteger('id_pengajar')->nullable();
            $table->foreign('id_pengajar')
                    ->references('id_pengajar')
                    ->on('pengajar')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            $table->string('img_program');
            $table->string('nama_program');
            $table->text('deskripsi');
            $table->text('lesson');
            $table->timestamps('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('program');
    }
};