<script setup>
import NavItem from './NavItem.vue'
</script>
<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" class="brand-link">
                <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Blog</span>
            </a>
            <div class="sidebar">
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- <li class="nav-item">
                            <a href="{{ route('public.public.index') }}" class="nav-link">
                                <i class="nav-icon fas fa-home"></i>
                                <p>Accueil</p>
                            </a>
                        </li> -->
                        <NavItem
                            :route="route('dashboard')"
                            icon="nav-icon fas fa-home"
                            title="Accueil"
                        />
                        <NavItem
                            :route="route('dashboard')"
                            icon="nav-icon fas fa-chart-bar"
                            title="Dashboard"
                        />
                        <li class="nav-item has-treeview" >
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-table"></i>
                                <p>
                                    PkgsBlog
                                    <i class="right fas fa-angle-left"></i> <!-- Flèche pour sous-menu -->
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <NavItem
                                    :route="route('article.index')"
                                    icon="fas fa-newspaper nav-icon"
                                    title="Articles"
                                />
                                <NavItem
                                    :route="route('category.index')"
                                    icon="fas fa-layer-group nav-icon"
                                    title="Categories"
                                />
                                <NavItem
                                    :route="route('tag.index')"
                                    icon="fas fa-tags nav-icon"
                                    title="Tags"
                                />
                                <li class="nav-item">
                                    <a href="{{ route('comment.index') }}" class="nav-link">
                                        <i class="fas fa-comment nav-icon"></i>
                                        <p>Commentaires</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="{{ route('user.index') }}" class="nav-link">
                                        <i class="fas fa-user nav-icon"></i>
                                        <p>Users</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
</template>


