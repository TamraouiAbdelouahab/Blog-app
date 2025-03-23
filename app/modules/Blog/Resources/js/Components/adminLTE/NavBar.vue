<script setup>
import { Link } from '@inertiajs/vue3';
    const props = defineProps({
        userName: {
            type: String,
            required: true,
        },
    });
</script>
<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <!-- User Profile Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         {{ props.userName }}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li>
                            <Link class="dropdown-item"
                            :href="route('logout')"
                            method="post"
                            >
                                <i class="fas fa-sign-out-alt mr-2"></i> Logout
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
</template>
