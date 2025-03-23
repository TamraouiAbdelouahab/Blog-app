<script setup>
    import { Head,Link } from '@inertiajs/vue3';
    import Dashboard from '@blog/Layouts/AdminLteDashboard.vue'
    import { useForm } from '@inertiajs/vue3';
    import InputError from '@blog/Components/InputError.vue'





const form = useForm({
    name: '',
    slug: ''
});
const submit = () => {
    form.post(route('category.store'), {
        onSuccess: () => {
            alert('catégotie ajouté avec succès !');
        }
    });
};
</script>

<template>
    <Head title="Create a Category" />
    <Dashboard>
        <div class="card card-primary">
            <div class="container-fluid">
                <div class="row mb-2 pt-4 justify-content-end">
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><Link :href="route('dashboard')">Accueil</Link></li>
                            <li class="breadcrumb-item active"><Link :href="route('category.index')">Categories</Link></li>
                            <li class="breadcrumb-item active">Ajouter</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="card-header">
                <h3 class="card-title">Ajouter une catégorie</h3>
            </div>
            <form @submit.prevent="submit">
                <div class="card-body">
                    <!-- Champ Nom -->
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            v-model="form.name"
                            required
                            placeholder="Entrez le Nom">
                    </div>
                    <InputError class="text-danger mt-2" :message="form.errors.name" />
                    <!-- Champ slug -->
                    <div class="form-group">
                        <label for="slug">Slug</label>
                        <input
                            type="text"
                            name="slug"
                            class="form-control"
                            id="slug"
                            v-model="form.slug"
                            required
                            placeholder="Entrez le slug">
                    </div>
                    <InputError class="text-danger mt-2" :message="form.errors.slug" />
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    </Dashboard>
</template>
