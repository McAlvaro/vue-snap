<script setup>
import CardCollection from './CardCollection.vue';


defineProps({ collections: Array })
</script>
<template>
    <div class="w-full h-full p-4 border border-gray-800 rounded-xl">
        <p>Collections</p>
        <div class="flex flex-col">
            <ul role="list" class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="(collection, index) in collections" class="py-3 sm:py-4">
                    <CardCollection  :collection="collection" :key="index" />
                </li>
            </ul>
        </div>
    </div>
</template>
