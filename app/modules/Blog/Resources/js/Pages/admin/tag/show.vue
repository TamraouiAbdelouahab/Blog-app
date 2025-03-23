<script setup>
import { Head,Link } from '@inertiajs/vue3';
import Dashboard from '@blog/Layouts/AdminLteDashboard.vue'

const props = defineProps({
    tag: Object
});
</script>

<template>
    <Head title="show a Tag" />
    <Dashboard>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Détail</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><Link :href="route('dashboard')">Accueil</Link></li>
                            <li class="breadcrumb-item active"><Link :href="route('tag.index')">tags</Link></li>
                            <li class="breadcrumb-item active">view</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row mb-2 justify-content-end">
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <Link :href="route('tag.edit',tag)" class="btn btn-primary btn-sm p-2 text-white"><i class="fas fa-edit mr-2"></i>Modifier</Link>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="container-fluid">
                <div class="card p-4">
                    <h4>id : </h4>
                    <p>{{ tag.id }}</p>
                    <h4>name : </h4>
                    <p>{{ tag.name }}</p>
                    <h4>slug : </h4>
                    <p>{{ tag.slug }}</p>
                    <h4>created at : </h4>
                    <p>{{ tag.created_at }}</p>


                </div>
            </div>
        </section>
    </Dashboard>
</template>
