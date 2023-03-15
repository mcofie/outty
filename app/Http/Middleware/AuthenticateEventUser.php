<?php

namespace App\Http\Middleware;

use App\Http\Resources\MainResource;
use App\Models\Organizer;
use Closure;
use Illuminate\Http\Request;

class AuthenticateEventUser
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Organizer::where('token', $request->header('token'))->first();

        if ($user != null) {
            $request->merge(['organizer' => $user]);
        } else {
            return new MainResource(['data' => new \stdClass(), 'message' => '', 'status' => 401]);
        }


        return $next($request);
    }
}
