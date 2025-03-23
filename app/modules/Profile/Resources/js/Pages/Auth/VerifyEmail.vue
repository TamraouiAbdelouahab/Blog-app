<script setup>
import { computed } from 'vue';
import GuestLayout from '@profile/Layouts/GuestLayout.vue';
import PrimaryButton from '@profile/Components/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>
    <GuestLayout>
        <Head title="Email Verification" />

        <div class="alert alert-info">
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
        </div>

        <div v-if="verificationLinkSent" class="alert alert-success">
            A new verification link has been sent to the email address you
            provided during registration.
        </div>

        <form @submit.prevent="submit">
            <div class="d-flex justify-content-between align-items-center mt-4">
                <PrimaryButton
                    class="btn btn-primary"
                    :class="{ 'disabled': form.processing }"
                    :disabled="form.processing"
                >
                    Resend Verification Email
                </PrimaryButton>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="btn btn-link text-decoration-none"
                >
                    Log Out
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
