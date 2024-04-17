<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
    <main>
        <div class="min-h-svh flex flex-col dark:bg-gray-900 dark:text-white">
            <Navbar/>
            <h1>Navbar</h1>
            <RouterView />
        </div>
    </main>
</template>
