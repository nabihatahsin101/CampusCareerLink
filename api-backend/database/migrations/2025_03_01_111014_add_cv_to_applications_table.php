<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('applications', function (Blueprint $table) {
            $table->string('cv')->nullable()->after('phone'); // Add CV column
        });
    }

    public function down() {
        Schema::table('applications', function (Blueprint $table) {
            $table->dropColumn('cv');
        });
    }
};
