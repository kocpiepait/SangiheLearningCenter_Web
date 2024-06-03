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
        Schema::table('pengajar', function (Blueprint $table) {
            // Ubah tipe data kolom foto_pengajar menjadi text
            $table->binary('foto_pengajar')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pengajar', function (Blueprint $table) {
            // Kembalikan tipe data kolom foto_pengajar menjadi string
            $table->string('foto_pengajar')->change();
        });
    }
};