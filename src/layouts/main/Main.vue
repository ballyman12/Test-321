<script setup lang="ts">
import Sidebar from "../../components/menu/SidebarMenu.vue";
import Toolbar from "../../components/toolbar/Toolbar.vue";
import { defineComponent, createApp } from "vue";

const buttonView = defineComponent({
  data() {
    return {};
  },
  created() {
    console.log("Pass");
    this.$router.push("/campaign");
  },
});
</script>

<template>
  <div class="landing-page p-grid">
    <div class="p-col-2">
      <Sidebar></Sidebar>
    </div>
    <main class="container p-col-10">
      <router-view></router-view>
    </main>
  </div>
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
