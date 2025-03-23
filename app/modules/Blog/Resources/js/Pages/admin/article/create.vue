<script setup>
    import { Head,Link } from '@inertiajs/vue3';
    import Dashboard from '@blog/Layouts/AdminLteDashboard.vue'
    import { useForm } from '@inertiajs/vue3';
    import InputError from '@blog/Components/InputError.vue'

    const props = defineProps({
    categories: Array,
    tags: Array
    });
    const form = useForm({
    title: '',
    content: '',
    category : props.categories[0].id,
    tags : []
});
const submit = () => {
    form.post(route('article.store'), {
        onSuccess: () => {
            alert('article ajouté avec succès !');
        }
    });
};
</script>

<template>
    <Head title="Create a Category" />
    <Dashboard>
        <section class="content">
            <div class="card card-primary">
                <div class="container-fluid">
                    <div class="row mb-2 pt-4 justify-content-end">
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="{{Route('dashboard')}}">Accueil</a></li>
                                <li class="breadcrumb-item active"><a href="{{Route('article.index')}}">Articles</a></li>
                                <li class="breadcrumb-item active">Ajouter</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="card-header">
                    <h3 class="card-title">Ajouter un Article</h3>
                </div>

                <!-- /.card-header -->
                <!-- form start -->
                <form action="{{route('article.store')}}" method="POST">
                    <div class="card-body">
                        <!-- Champ Titre -->
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" class="form-control" id="title" placeholder="Entrez le titre">
                            <InputError class="text-danger mt-2" :message="form.errors.title" />
                        </div>
                        <!-- Champ Description -->
                        <div class="form-group">
                            <label for="description">Content</label>
                            <textarea name="content" class="form-control" id="description" rows="3" placeholder="Entrez la description"></textarea>
                            <InputError class="text-danger mt-2" :message="form.errors.content" />
                        </div>

                        <!-- Champ Catégorie -->
                        <div class="form-group">
                            <label for="category">Catégorie</label>
                            <select
                                v-model="form.category"
                                name="category"
                                class="form-control"
                                id="category"
                            >
                                <option v-for="category in props.categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                            </select>
                            <InputError class="text-danger mt-2" :message="form.errors.category" />

                        </div>

                        <!-- Champ Tags -->
                        <div class="mt-5">
                            <label for="tags" class="form-label">Sélectionnez les tags :</label>
                            <select id="tags" v-model="form.tags" name="tags[]" class="form-select" multiple>
                                <option v-for="tag in props.tags" :value="tag.id" :key="tag.id">{{ tag.name }} </option>
                            </select>
                        </div>
                        <InputError class="text-danger mt-2" :message="form.errors.tag" />
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Enregistrer</button>
                    </div>
                </form>
            </div>
        </section>
    </Dashboard>
</template>
