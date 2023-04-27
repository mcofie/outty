<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $table = 'event';

    protected $fillable = ['event_name', 'status', 'user_id', 'event_description',
        'slug',
        'event_theme_color',
        'background_color',
        'category',
        'event_date',
        'text_color',
        'primary_typeface',
        'secondary_typeface'];

    protected $hidden = [
        'user_id'
    ];

    public function lineups()
    {
        return $this->hasMany(LineUp::class);
    }
}
