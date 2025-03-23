<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-vh-100 bg-light">
            <nav class="border-bottom bg-white shadow-sm">
                <!-- Primary Navigation Menu -->
                <div class="container">
                    <div class="d-flex align-items-center justify-content-between py-3">
                        <div class="d-flex align-items-center">
                            <!-- Logo -->
                            <div class="me-3">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo class="h-9 w-auto" />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="d-none d-sm-flex gap-3">
                                <NavLink
                                    :href="route('dashboard')"
                                    :active="route().current('dashboard')"
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div class="d-none d-sm-flex align-items-center">
                            <!-- Settings Dropdown -->
                            <div class="dropdown">
                                <button
                                    class="btn btn-light dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {{ $page.props.auth.user.name }}
                                </button>
                                <ul class="dropdown-menu">
                                    <DropdownLink :href="route('profile.edit')">
                                        Profile
                                    </DropdownLink>
                                    <DropdownLink :href="route('logout')" method="post" as="button">
                                        Log Out
                                    </DropdownLink>
                                </ul>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <button
                            @click="showingNavigationDropdown = !showingNavigationDropdown"
                            class="d-sm-none btn btn-light"
                        >
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div v-if="showingNavigationDropdown" class="d-sm-none bg-white p-3">
                    <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        Dashboard
                    </ResponsiveNavLink>

                    <!-- Responsive Settings Options -->
                    <div class="border-top pt-3">
                        <div class="fw-bold">{{ $page.props.auth.user.name }}</div>
                        <div class="text-muted small">{{ $page.props.auth.user.email }}</div>

                        <div class="mt-2">
                            <ResponsiveNavLink :href="route('profile.edit')">
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow-sm py-3" v-if="$slots.header">
                <div class="container">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="container py-4">
                <slot />
            </main>
        </div>
    </div>
</template>
