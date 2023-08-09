<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registry extends Model
{
    use HasFactory;

    protected $table = 'registry';

    protected $fillable = ['email', 'name', 'phone_number', 'event_id'];
}
