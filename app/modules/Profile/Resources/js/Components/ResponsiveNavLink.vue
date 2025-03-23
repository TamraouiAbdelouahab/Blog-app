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
        ? 'd-block w-100 ps-3 pe-4 py-2 border-start border-primary text-start text-base fw-medium text-primary bg-light focus-outline-none focus-text-primary focus-bg-light focus-border-primary transition'
        : 'd-block w-100 ps-3 pe-4 py-2 border-start border-transparent text-start text-base fw-medium text-secondary hover-text-dark hover-bg-light hover-border-secondary focus-outline-none focus-text-dark focus-bg-light focus-border-secondary transition'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
