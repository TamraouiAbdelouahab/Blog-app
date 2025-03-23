<?php

namespace Modules\Profile\App\Providers;

use Illuminate\Support\ServiceProvider;


class ProfileServiceProvider extends ServiceProvider
{
    // protected $policies = [
    //     Article::class => ArticlePolicy::class,
    // ];
    public function boot()
    {
        // Charger les routes
        $this->loadRoutesFrom(__DIR__.'/../../Routes/web.php');

        // Charger les migrations
        $this->loadMigrationsFrom(__DIR__.'/../../Database/Migrations');

        // Charger les vues
        $this->loadViewsFrom(__DIR__.'/../../Resources/views', 'Profile');

        // Publier les assets si nécessaire
        $this->publishes([
            __DIR__.'/../../Resources/views' => resource_path('views/vendor/Profile'),
        ], 'Profile-views');
    }

    public function register()
    {
        // Enregistrer d'autres services si nécessaire
    }
}
