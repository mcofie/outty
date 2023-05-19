<?php

use App\Http\Controllers\QrCodeController;
use Illuminate\Support\Facades\App;
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

Route::get('/get-qr', [QrCodeController::class, 'generateQrCode']);
Route::get('/download-qr', [QrCodeController::class, 'downloadQrCode']);

//
//
//Route::get('/zs', function () {
//    return "hhju";
//});
//
////Send Email
//Route::get('/mail', function () {
//
//    Mail::send(new \App\Mail\EventCreated());
//
////    return view('');
//});
//
//Route::get('check-download', function () {
//    return view('payment');
//});
//


//Landing page
Route::get('/', function () {
    return view('app');
});


//Landing page
Route::get('/account', function () {
    return view('account');
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
Route::get('/{id}/edit', function ($id) {
    return view('edit');
});


//Experiments

