<script setup>
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.clearErrors();
    form.reset();
};
</script>

<template>
    <section class="mb-4">
        <header>
            <h2 class="h5 text-dark">Delete Account</h2>
            <p class="small text-muted">
                Once your account is deleted, all of its resources and data will
                be permanently removed. Please download any important data before proceeding.
            </p>
        </header>

        <button class="btn btn-danger mt-3" @click="confirmUserDeletion">
            Delete Account
        </button>

        <!-- Bootstrap Modal -->
        <div
            class="modal fade"
            :class="{ 'show d-block': confirmingUserDeletion }"
            tabindex="-1"
            role="dialog"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Are you sure?</h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <p class="small text-muted">
                            Once your account is deleted, all of its data will be permanently removed.
                            Please enter your password to confirm this action.
                        </p>

                        <div class="mt-3">
                            <label for="password" class="form-label">Password</label>
                            <input
                                id="password"
                                ref="passwordInput"
                                v-model="form.password"
                                type="password"
                                class="form-control"
                                placeholder="Enter your password"
                                @keyup.enter="deleteUser"
                            />
                            <div v-if="form.errors.password" class="text-danger small mt-2">
                                {{ form.errors.password }}
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" @click="closeModal">
                            Cancel
                        </button>
                        <button
                            class="btn btn-danger ms-2"
                            :class="{ 'disabled': form.processing }"
                            :disabled="form.processing"
                            @click="deleteUser"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Backdrop -->
        <div
            v-if="confirmingUserDeletion"
            class="modal-backdrop fade show"
        ></div>
    </section>
</template>
