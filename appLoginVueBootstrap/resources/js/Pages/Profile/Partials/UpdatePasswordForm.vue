<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section class="mb-4">
        <header>
            <h2 class="h5 text-dark">Update Password</h2>
            <p class="small text-muted">
                Ensure your account uses a strong, random password for security.
            </p>
        </header>

        <form @submit.prevent="updatePassword" class="mt-3">
            <div class="mb-3">
                <label for="current_password" class="form-label">Current Password</label>
                <input
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    class="form-control"
                    autocomplete="current-password"
                />
                <div v-if="form.errors.current_password" class="text-danger small mt-1">
                    {{ form.errors.current_password }}
                </div>
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">New Password</label>
                <input
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    autocomplete="new-password"
                />
                <div v-if="form.errors.password" class="text-danger small mt-1">
                    {{ form.errors.password }}
                </div>
            </div>

            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Confirm Password</label>
                <input
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="form-control"
                    autocomplete="new-password"
                />
                <div v-if="form.errors.password_confirmation" class="text-danger small mt-1">
                    {{ form.errors.password_confirmation }}
                </div>
            </div>

            <div class="d-flex align-items-center gap-3">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                    Save
                </button>

                <transition
                    enter-active-class="fade-in"
                    leave-active-class="fade-out"
                >
                    <p v-if="form.recentlySuccessful" class="small text-muted">
                        Saved.
                    </p>
                </transition>
            </div>
        </form>
    </section>
</template>
