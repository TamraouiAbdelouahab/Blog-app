<script setup>
import Checkbox from '@profile/Components/Checkbox.vue';
import GuestLayout from '@profile/Layouts/GuestLayout.vue';
import InputError from '@profile/Components/InputError.vue';
import InputLabel from '@profile/Components/InputLabel.vue';
import PrimaryButton from '@profile/Components/PrimaryButton.vue';
import TextInput from '@profile/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="alert alert-success">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="mb-3">
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="form-control mt-1"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="text-danger mt-2" :message="form.errors.email" />
            </div>

            <div class="mb-3">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="form-control mt-1"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="text-danger mt-2" :message="form.errors.password" />
            </div>

            <div class="mb-3 form-check">
                <Checkbox
                    name="remember"
                    class="form-check-input"
                    v-model:checked="form.remember"
                />
                <label class="form-check-label ms-2 text-secondary">
                    Remember me
                </label>
            </div>

            <div class="d-flex justify-content-between align-items-center">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="text-decoration-none text-primary"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton
                    class="btn btn-primary"
                    :class="{ 'opacity-50': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
