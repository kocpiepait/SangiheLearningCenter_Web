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
        Schema::create('testimoni', function (Blueprint $table) {
            $table->id();
            $table->text('isi_testimoni')->required();
            $table->string('nama_testimoni', 200)->required();
            $table->string('status_testimoni', 200)->required();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimoni');
    }
};