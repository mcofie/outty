<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LineUp extends Model
{
    protected $table = 'lineup';

    protected $fillable = ['title', 'event_id', 'description', 'status', 'start_time','end_time'];

    protected $hidden = [
        'event_id'
    ];

    use HasFactory;

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
