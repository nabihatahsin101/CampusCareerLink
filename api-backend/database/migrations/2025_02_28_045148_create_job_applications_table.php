<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('job_applications', function (Blueprint $table) {
        $table->id();
        $table->foreignId('job_id')->constrained('post_jobs')->onDelete('cascade');
        $table->string('email');
        $table->string('cv');
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_applications');
    }
};
