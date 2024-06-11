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
        Schema::table('processing', function (Blueprint $table) {
            $table->dropForeign(['id_pengajar']);
            $table->dropForeign(['id_peserta']);
            $table->dropForeign(['id_program']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('processing', function (Blueprint $table) {
            // Tambahkan kembali foreign key jika diperlukan
            $table->foreign('id_pengajar')->references('id')->on('processing')->onDelete('cascade');
            $table->foreign('id_peserta')->references('id')->on('processing')->onDelete('cascade');
            $table->foreign('id_program')->references('id')->on('processing')->onDelete('cascade');
        });
    }
};