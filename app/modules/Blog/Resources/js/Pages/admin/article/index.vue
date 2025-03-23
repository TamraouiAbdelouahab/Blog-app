<script setup>
    import { Head } from '@inertiajs/vue3';
    import Dashboard from '@blog/Layouts/AdminLteDashboard.vue'

    const props = defineProps({
    articles: Array
    });
</script>

<template>
    <Head title="Dashboard" />
    <Dashboard>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Liste des Articles</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Accueil</a></li>
                            <li class="breadcrumb-item active">Aricle</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row mb-2 justify-content-end">
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <a href="{{ route('articles.export') }}" class="text-white">
                                <div class="mr-2 d-flex align-items-center btn btn-danger btn-s">
                                    <i class="fas fa-download"></i> <span class="ml-2">Exporter</span>
                                </div>
                            </a>
                            <a href="{{ Route('article.create') }}" class="text-white">
                                <div class="mr-2 d-flex align-items-center btn btn-primary btn-s">
                                        <i class="fas fa-plus"></i><span class="ml-2">Ajouter un article</span>
                                </div>
                            </a>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Tableau des articles</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titre</th>
                                    <th>Categorie</th>
                                    <th>Utilisateur</th>
                                    <th>date de publication</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                    <tr v-for="article in articles" :key="article.id">
                                        <td>{{ article.id }}</td>
                                        <td>{{ article.title }}</td>
                                        <td>{{ article.category.name }}</td>
                                        <td>{{ article.user.name }}</td>
                                        <td>{{ article.created_at }}</td>
                                        <td>
                                            <a href="{{Route('article.show',article)}}" class="btn btn-primary btn-sm mr-1"><i class="fas fa-eye"></i></a>
                                            <a href="{{Route('article.edit',article)}}" class="btn btn-info btn-sm mr-1"><i class="fas fa-edit"></i> </a>
                                            <form action="{{ route('article.destroy', article) }}" method="POST" style="display:inline;">
                                                <button type="submit" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </Dashboard>
</template>

