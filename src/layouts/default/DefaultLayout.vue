<script setup lang="ts">
import Sidebar from '../../components/menu/SidebarMenu.vue'
import Toolbar from '../../components/toolbar/Toolbar.vue'
import ShopTable from '../../components/table/ShopTable.vue';
import Form from '../../components/form-search/Form.vue';
</script>

<template>
    <div>
        <!-- <Sidebar></Sidebar> -->
    </div>
    <main class="container">
        <!-- <Form></Form>
        <ShopTable></ShopTable> -->
    </main>
</template>

<style scoped>
* {
    outline: none;
    box-sizing: border-box;
}

.container {
    padding-left: var(--sidebar-width);
}
</style>
