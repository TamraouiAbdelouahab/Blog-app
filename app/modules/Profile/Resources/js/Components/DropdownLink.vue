<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Link
        :href="href"
        class="d-block w-100 px-4 py-2 text-start text-body-secondary transition hover-bg-light focus-bg-light focus-outline-none"
    >
        <slot />
    </Link>
</template>
