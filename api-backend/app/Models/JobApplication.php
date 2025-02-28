<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'cv', 'job_id'];

    // Define relationship (if needed)
    public function job()
    {
        return $this->belongsTo(PostJob::class, 'job_id');
    }
}
