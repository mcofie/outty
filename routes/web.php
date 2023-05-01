<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/zs', function () {
    return "hhju";
});

//Send Email
Route::get('/mail', function () {

    Mail::send(new \App\Mail\EventCreated());

//    return view('');
});

Route::get('/mailable', function () {
    return new App\Mail\EventCreated();
});

//Landing page
Route::get('/', function () {
    return view('app');
});

//Registration
Route::get('/get-started', function () {
    return view('get-started');
});

//Payment
Route::get('/payment-feedback', function () {
    return view('payment-feedback');
});


//Client/Customer facing screen
Route::get('/{id}', function ($id) {
    return view('event');
})->where('id', '[A-Za-z-]+');

//Edit
Route::get('/p/{id}/edit', function ($id) {
    return "$id";
})->where('id', '[A-Za-z]+');



