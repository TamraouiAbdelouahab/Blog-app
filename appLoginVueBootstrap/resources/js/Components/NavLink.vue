<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'nav-link active fw-medium border-bottom border-primary text-dark'
        : 'nav-link fw-medium text-secondary border-bottom border-transparent hover-text-dark hover-border-secondary'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
