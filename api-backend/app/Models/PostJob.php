<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostJob extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'department',
        'grade',
        'posted_on',
        'deadline',
        'application_mode',
        'salary',
    ];
}
