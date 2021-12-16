<script setup lang="ts">
</script>

<template>
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
    </div>
</template>

<style scoped>
.topnav {
    background-color: #0c2d48;
    overflow: hidden;
}

.topnav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #145da0;
    color: white;
    font-weight: bold;
}

.topnav a.active {
    background-color: #2E8BC0;
    color: white;
    font-weight: bold;
}
</style>