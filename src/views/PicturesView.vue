<script setup>
import ImageGallery from '@/components/ImageGallery.vue';
import PictureCover from '@/components/PictureCover.vue';
import { api } from '@/services/api';
import { onMounted, ref } from 'vue';

const photos = ref([]);
const image_url = "https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ix%3D%3D";


onMounted(async () => {
    photos.value = await api.getPhotos();
});

const loadMore = async () => {
    photos.value = photos.value.concat(await api.getPhotos());
};

</script>
<template>
    <div class="w-full">
        <div class="flex flex-col space-y-6">
            <PictureCover :cover_image="image_url" />
            <div class="w-full">
                <form class="max-w-full mx-auto">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..." required />
                    </div>
                </form>
            </div>
            <ImageGallery :photos="photos" />
            <div>
                <button v-show="! api.loading.value" @click="loadMore" class="w-full border border-gray-700 py-4 px-6 hover:bg-blue-500 active:bg-blue-700">Load More...</button>
            </div>
        </div>
    </div>
</template>
