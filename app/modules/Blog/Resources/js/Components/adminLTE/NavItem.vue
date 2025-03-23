<script setup>
import { Link } from '@inertiajs/vue3';
    const props = defineProps({
        route: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <li class="nav-item">
        <Link :href="props.route" class="nav-link">
            <i :class="props.icon"></i>
            <p>{{ props.title }}</p>
        </Link>
    </li>
</template>
