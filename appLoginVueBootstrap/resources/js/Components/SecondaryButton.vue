<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="btn btn-light text-uppercase fw-semibold text-xs px-4 py-2 border shadow-sm transition focus-ring focus-ring-primary focus-ring-opacity-50 disabled-opacity-25"
    >
        <slot />
    </button>
</template>
