<script setup>
import { Head, Link } from '@inertiajs/vue3';
</script>
<template>

    <Head title="Home" />
    <Link :href="route('login')">Login</Link>
    <div>HomeMan</div>
</template>
