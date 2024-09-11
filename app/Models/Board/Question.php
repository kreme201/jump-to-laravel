<?php

namespace App\Models\Board;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject',
        'content',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
