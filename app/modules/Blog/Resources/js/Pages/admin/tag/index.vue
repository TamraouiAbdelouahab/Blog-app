
<script setup>

import { Head,Link,useForm } from '@inertiajs/vue3';
import Dashboard from '@blog/Layouts/AdminLteDashboard.vue'

const props = defineProps({
    tags: Array
});
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0] + ' at ' + date.toTimeString().split(' ')[0];
}
const form = useForm({});
const deleteTag = (tag) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
        return;
    }
    form.delete(route('tag.destroy',tag), {
        onSuccess: () => {
            alert('Tag supprimé avec succès !');
        }
    });
};
</script>

<template>
    <Head title="Tags" />
    <Dashboard>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Liste des tags</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><Link :href="route('dashboard')">Accueil</Link></li>
                            <li class="breadcrumb-item active">tags</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row mb-2 justify-content-end">
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <form action="{{route('tags.import')}}" method="POST" class="mr-2" enctype="multipart/form-data">
                                <div class="btn btn-success py-0 px-2 d-flex align-items-center">
                                    <label for="file" class="my-0 py-0" style="cursor: pointer; color: white">
                                        <i class="fas fa-upload"></i>
                                    </label>
                                    <input class="d-none" type="file" name="file" id="file" accept=".xlsx, .csv" required>
                                    <button type="submit" class="btn btn-s text-white border-0">
                                        Import
                                    </button>
                                    <!-- @error('file')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror -->
                                </div>
                            </form>
                            <a href="{{ route('tags.export') }}" class="text-white">
                                <div class="mr-2 d-flex align-items-center btn btn-danger btn-s">
                                    <i class="fas fa-download"></i> <span class="ml-2">Exporter</span>
                                </div>
                            </a>
                            <Link :href="route('tag.create')" class="text-white">
                                <div class="mr-2 d-flex align-items-center btn btn-primary btn-s">
                                        <i class="fas fa-plus"></i><span class="ml-2">Ajouter un tag</span>
                                </div>
                            </Link>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Tableau des tags</h3>
                    </div>
                    <!-- /.card-header -->
                        <p v-if="false" class="p-5 text-center">aucun article trouvé.</p>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>slug</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="tag in tags" :key="tag.id">
                                        <td>{{ tag.id }}</td>
                                        <td>{{ tag.name }}</td>
                                        <td>{{ tag.slug }}</td>
                                        <td>{{ formatDate(tag.created_at) }}</td>
                                        <td>
                                            <Link :href="route('tag.edit',tag)" class="btn btn-info btn-sm mr-1" > <i class="fas fa-edit"></i></Link>
                                            <Link :href="route('tag.show',tag)" class="btn btn-secondary btn-sm mr-1" > <i class="fas fa-eye"></i></Link>
                                            <!-- <form action="{{ Route('tag.destroy',$tag) }}" method="POST" class="d-inline">
                                                <button type="submit" onclick="confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')" class="btn btn-danger btn-sm mr-1"><i class="fas fa-trash"></i> </button>
                                            </form> -->
                                            <form @submit.prevent="deleteTag(tag)" class="d-inline">
                                                <button type="submit" class="btn btn-danger btn-sm mr-1"><i class="fas fa-trash"></i> </button>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <!-- /.card-body -->
                </div>
                <div>
                </div>
                <!-- /.card -->
            </div>
        </section>
    </Dashboard>
</template>
