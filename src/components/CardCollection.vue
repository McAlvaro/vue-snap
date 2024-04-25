<script setup>
defineProps(['collection'])
</script>
<template>
    <a :href="collection.links.html" target="_blank">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" :src="collection.cover_photo.urls.small" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    {{ collection.title }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    By {{ collection.user.username }}
                </p>
            </div>
            <span
                class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                {{ collection.total_photos }}
            </span>
        </div>
    </a>
</template>
