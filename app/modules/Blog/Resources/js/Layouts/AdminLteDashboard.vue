<script setup>
    import NavBar from '@blog/Components/adminLTE/NavBar.vue'
    import Aside from '@blog/Components/adminLTE/Aside.vue'
    import Footer from '@blog/Components/adminLTE/Footer.vue'
    import "../app.js"
</script>

<template>
    <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <!-- Navbar -->

        <NavBar userName="abdel"  />
        <!-- Sidebar -->

        <Aside />
        <!-- Content Wrapper -->

        <div class="content-wrapper">
            <slot />
        </div>
        <!-- Footer -->

        <Footer />
    </div>
    <!-- Scripts -->
     
</body>

</template>
