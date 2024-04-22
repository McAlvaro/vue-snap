<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
    <main>
        <div class="min-h-svh flex flex-col dark:bg-gray-900 dark:text-white">
            <Navbar />
            <div class="w-full">
                <div class="max-w-screen-xl flex justify-center items-center mx-auto mt-20">
                    <RouterView />
                </div>
            </div>
        </div>
    </main>
</template>
