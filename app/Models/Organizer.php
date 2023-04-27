<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizer extends Model
{
    use HasFactory;

    protected $table = 'organizer';

    protected $fillable = [
        'name',
        'email',
        'token',
        'phone_number',
    ];

    protected $hidden = [
        'token', 'created_at', 'updated_at'
    ];

    public function events()
    {
        return $this->hasMany(Event::class);
    }

}
