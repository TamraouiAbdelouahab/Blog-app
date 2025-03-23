<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    align: {
        type: String,
        default: 'right',
    },
    width: {
        type: String,
        default: '48',
    },
    contentClasses: {
        type: String,
        default: 'py-1 bg-white',
    },
});

const closeOnEscape = (e) => {
    if (open.value && e.key === 'Escape') {
        open.value = false;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const widthClass = computed(() => {
    return {
        48: 'w-48',
    }[props.width.toString()];
});

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'dropdown-menu-start';
    } else if (props.align === 'right') {
        return 'dropdown-menu-end';
    } else {
        return '';
    }
});

const open = ref(false);
</script>

<template>
    <div class="position-relative">
        <div @click="open = !open">
            <slot name="trigger" />
        </div>

        <!-- Full Screen Dropdown Overlay -->
        <div
            v-show="open"
            class="position-fixed top-0 start-0 w-100 h-100"
            style="z-index: 1040"
            @click="open = false"
        ></div>

        <Transition
            enter-active-class="fade show"
            leave-active-class="fade"
        >
            <div
                v-show="open"
                class="dropdown-menu shadow-lg show mt-2"
                :class="[alignmentClasses]"
                style="display: block"
                @click="open = false"
            >
                <div class="dropdown-item-text" :class="contentClasses">
                    <slot name="content" />
                </div>
            </div>
        </Transition>
    </div>
</template>
