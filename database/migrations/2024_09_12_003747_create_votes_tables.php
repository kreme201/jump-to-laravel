<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up() : void
    {
        Schema::create('board_question_votes', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('question_id')->constrained('board_questions')->cascadeOnDelete();

            $table->primary(['user_id', 'question_id']);
        });
        Schema::create('board_answer_votes', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('answer_id')->constrained('board_answers')->cascadeOnDelete();

            $table->primary(['user_id', 'answer_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down() : void
    {
        Schema::dropIfExists('board_question_votes');
        Schema::dropIfExists('board_answer_votes');
    }
};
