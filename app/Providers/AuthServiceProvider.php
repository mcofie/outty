<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Event;
use App\Models\LineUp;
use App\Models\Organizer;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('update-event', function (Organizer $organizer, Event $event) {
            return $organizer->id === $event->user_id;
        });

//        Gate::define('update-lineup', function (Event $event, LineUp $lineUp) {
//            return $event->id === $lineUp->event_id;
//        });

    }
}
