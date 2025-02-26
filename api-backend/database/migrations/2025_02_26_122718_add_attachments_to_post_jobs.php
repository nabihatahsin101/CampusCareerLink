<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAttachmentsToPostJobsTable extends Migration
{
    public function up()
    {
        Schema::table('post_jobs', function (Blueprint $table) {
            $table->string('attachments')->nullable(); // Add attachments column
        });
    }

    public function down()
    {
        Schema::table('post_jobs', function (Blueprint $table) {
            $table->dropColumn('attachments'); // Remove attachments column
        });
    }
}
