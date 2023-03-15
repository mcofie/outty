<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\LineUpController;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\PaymentController;
use App\Http\Middleware\AuthenticateEventUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//TODO: Write all the apis for the service
Route::get("test", function () {
    return response()->json(["max" => "something"]);
});

//Organizer
//Request Token
Route::post('organizer/request-token', [OrganizerController::class, 'request_token']);

//Events
Route::get('events/{id}', [EventController::class, 'show'])->withoutMiddleware([AuthenticateEventUser::class]);
//Create Event & LineUp
Route::post('events', [EventController::class, 'store'])->withoutMiddleware([AuthenticateEventUser::class]);

//Slug lookup
Route::get('events/slug-lookup/{slug}', [EventController::class, 'slug_look_up'])->withoutMiddleware([AuthenticateEventUser::class]);
Route::delete('events/{id}', [EventController::class, 'destroy']);
Route::put('events/{id}', [EventController::class, 'update']);

//Payment Webhook
Route::post('payments/webhook', [PaymentController::class, 'webhook'])->withoutMiddleware([AuthenticateEventUser::class]);


//LineUps
Route::post('lineups', [LineUpController::class, 'store']);
Route::put('lineups/{id}', [LineUpController::class, 'update']);
Route::delete('lineups/{id}', [LineUpController::class, 'destroy']);


