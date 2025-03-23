<script setup>
    import { Head } from '@inertiajs/vue3';
    import Dashboard from '@blog/Layouts/AdminLteDashboard.vue'
    const totalUsers = 10
    const totalArticles = 10
    const totalCategories = 10
    const totalComments = 10
</script>
<template>
    <Head title="Dashboard" />
    <Dashboard>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <!-- Box 1 -->
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h3>{{ totalUsers }} </h3>
                                <p class="fs-3 fw-bold">Users</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-user"></i>
                            </div>
                            <a href="{{ Route('user.index') }}" class="small-box-footer">plus infos <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->

                    <!-- Box 2 -->
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h3>{{ totalArticles }}</h3>
                                <p class="fs-3 fw-bold">Articles</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-newspaper"></i>
                            </div>
                            <a href="{{ Route('article.index') }}" class="small-box-footer">plus infos <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <!-- Box 3 -->
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-warning">
                            <div class="inner">
                                <h3>{{ totalCategories }}</h3>
                                <p class="fs-3 fw-bold">Catégories</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <a href="{{ Route('category.index') }}" class="small-box-footer">plus infos <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->

                    <!-- Box 4 -->
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-danger">
                            <div class="inner">
                                <h3>{{ totalComments }}</h3>
                                <p class="fs-3 fw-bold">Commentaires</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-comment"></i>
                            </div>
                            <a href="{{ Route('comment.index') }}" class="small-box-footer">plus infos <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                <!-- ./col -->
                </div>
            </div>
        </section>
    </Dashboard>
</template>
