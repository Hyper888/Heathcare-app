<?php

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

//Add Auth Later

//LOGIN
Route::post('/v1/login', [\App\Http\Controllers\UserController::class, 'authenticate']);

//USER
Route::middleware('auth:api')->group(function () {
    Route::put('/v1/user', [\App\Http\Controllers\UserController::class, 'updateUser']);
    Route::post('/v1/pro-profile', [\App\Http\Controllers\UserController::class, 'createProProfile']);
    Route::put('/v1/pro-profile', [\App\Http\Controllers\UserController::class, 'updateProProfile']);
    Route::post('/v1/user-photo', [\App\Http\Controllers\UserController::class, 'uploadProfileImage']);
    Route::post('/v1/license', [\App\Http\Controllers\UserController::class, 'addLicense']);
    Route::put('/v1/license', [\App\Http\Controllers\UserController::class, 'editLicense']);
    Route::post('/v1/verify-license/{uuid}', [\App\Http\Controllers\UserController::class, 'verifyLicense']);

    Route::post('/v1/bus-profile', [\App\Http\Controllers\UserController::class, 'createBusProfile']);
    Route::put('/v1/bus-profile', [\App\Http\Controllers\UserController::class, 'updateBusProfile']);
    Route::post('/v1/bus-logo', [\App\Http\Controllers\UserController::class, 'uploadBusLogo']);
    Route::post('/v1/verify-bus/{uuid}', [\App\Http\Controllers\UserController::class, 'verifyBus']);

    //PROS
    Route::get('/v1/pros', [\App\Http\Controllers\UserController::class, 'getPros']);
    Route::get('/v1/pros/{uuid}', [\App\Http\Controllers\UserController::class, 'getPro']);

    //BUS
    Route::get('/v1/bus', [\App\Http\Controllers\UserController::class, 'getAllBus']);
    Route::get('/v1/bus/{uuid}', [\App\Http\Controllers\UserController::class, 'getBus']);

    //RESERVATIONS
    Route::get('/v1/reservation', [\App\Http\Controllers\ReservationController::class, 'getAll']);
    Route::get('/v1/reservation/{uuid}', [\App\Http\Controllers\ReservationController::class, 'get']);
    Route::post('/v1/reservation', [\App\Http\Controllers\ReservationController::class, 'create']);
    Route::post('/v1/counter-offer/{uuid}', [\App\Http\Controllers\ReservationController::class, 'counter']);
    Route::post('/v1/accept-offer/{uuid}', [\App\Http\Controllers\ReservationController::class, 'accept']);
    Route::post('/v1/approve-contract',[\App\Http\Controllers\ReservationController::class, 'approveContract']);

    //CONTRACTS
    Route::post('/v1/contract', [\App\Http\Controllers\ContractController::class, 'getAll']);
    Route::post('/v1/contract/{uuid}', [\App\Http\Controllers\ContractController::class, 'get']);


    //REVIEWS
    Route::post('/v1/review', [\App\Http\Controllers\ReviewController::class, 'create']);
    Route::get('/v1/review/{uuid}', [\App\Http\Controllers\ReviewController::class, 'get']);
    Route::get('/v1/review', [\App\Http\Controllers\ReviewController::class, 'getAll']);

    //PROS LIST
    Route::post('/v1/pro-list', [\App\Http\Controllers\ProListController::class, 'create']);
    Route::get('/v1/pro-list', [\App\Http\Controllers\ProListController::class, 'getAll']);
    Route::delete('/v1/pro-list/{uuid}', [\App\Http\Controllers\ReviewController::class, 'delete']);
});