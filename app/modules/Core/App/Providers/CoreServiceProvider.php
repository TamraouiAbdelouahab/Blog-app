<?php

namespace Modules\Core\App\Providers;

use Illuminate\Support\ServiceProvider;


class CoreServiceProvider extends ServiceProvider
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
        $this->loadViewsFrom(__DIR__.'/../../Resources/views', 'Core');

        // Publier les assets si nécessaire
        $this->publishes([
            __DIR__.'/../../Resources/views' => resource_path('views/vendor/Core'),
        ], 'Core-views');
    }

    public function register()
    {
        // Enregistrer d'autres services si nécessaire
    }
}
