<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="d-flex flex-column min-vh-100 align-items-center bg-light pt-5">
        <div class="mb-3">
            <Link href="/">
                <ApplicationLogo class="h-20 w-20 text-secondary" />
            </Link>
        </div>

        <div class="mt-3 w-100 bg-white p-4 shadow-sm rounded border" style="max-width: 400px;">
            <slot />
        </div>
    </div>
</template>
