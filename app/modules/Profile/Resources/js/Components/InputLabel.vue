<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <label class="d-block small fw-medium text-body-secondary">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>

