<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: 'lg',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['close']);
const dialog = ref();
const showSlot = ref(props.show);

watch(
    () => props.show,
    () => {
        if (props.show) {
            document.body.classList.add('modal-open');
            showSlot.value = true;
            dialog.value?.showModal();
        } else {
            document.body.classList.remove('modal-open');

            setTimeout(() => {
                dialog.value?.close();
                showSlot.value = false;
            }, 200);
        }
    },
);

const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
        e.preventDefault();
        if (props.show) {
            close();
        }
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.body.classList.remove('modal-open');
});

const maxWidthClass = computed(() => {
    return {
        sm: 'modal-sm',
        md: 'modal-md',
        lg: 'modal-lg',
        xl: 'modal-xl',
    }[props.maxWidth] || 'modal-lg';
});
</script>

<template>
    <dialog ref="dialog" class="modal fade show d-block" v-if="show" @click.self="close">
        <div class="modal-dialog" :class="maxWidthClass">
            <div class="modal-content">
                <slot v-if="showSlot" />
            </div>
        </div>
    </dialog>
</template>
