<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Application extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'email', 'phone', 'cv', 'job_id', 'job_title'];

}