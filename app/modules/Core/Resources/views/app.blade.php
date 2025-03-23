<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        {{-- @vite(['modules/Blog/Resources/js/admin.js', "modules/Blog/Resources/js/Pages/{$page['component']}.vue"]) --}}
        @vite(['modules/Core/Resources/js/app.js'])
        @inertiaHead
    </head>
    {{-- <body class="font-sans antialiased"> --}}
        @inertia
    {{-- </body> --}}
</html>
