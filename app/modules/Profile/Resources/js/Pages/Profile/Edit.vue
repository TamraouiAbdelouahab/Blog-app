<script setup>
import AuthenticatedLayout from '@profile/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="h4 fw-semibold text-dark">
                Profile
            </h2>
        </template>

        <div class="py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <!-- Update Profile Information -->
                        <div class="card shadow-sm mb-4">
                            <div class="card-body">
                                <UpdateProfileInformationForm
                                    :must-verify-email="mustVerifyEmail"
                                    :status="status"
                                />
                            </div>
                        </div>

                        <!-- Update Password -->
                        <div class="card shadow-sm mb-4">
                            <div class="card-body">
                                <UpdatePasswordForm />
                            </div>
                        </div>

                        <!-- Delete User -->
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <DeleteUserForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
