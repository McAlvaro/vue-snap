<script setup>
import ImageGallery from '@/components/ImageGallery.vue';
import PictureCover from '@/components/PictureCover.vue';
import Search from '@/components/Search.vue';
import { api } from '@/services/api';
import { onMounted, ref } from 'vue';

const photos = ref([]);
const image_url = "https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ix%3D%3D";
const search = ref(null);


onMounted(async () => {
    photos.value = await api.getPhotos();
});

// Search by
const loadMore = async () => {
    photos.value = photos.value.concat(await api.getPhotos(search.value));
};

const searchBy = async (term) => {
    search.value = term;
    photos.value = await api.getPhotos(term);
};

</script>
<template>
    <div class="w-full">
        <div class="flex flex-col space-y-6">
            <PictureCover :cover_image="image_url" />
            <div class="w-full">
                <Search @search-by="searchBy" />
            </div>
            <ImageGallery :photos="photos" />
            <div>
                <button v-show="! api.loading.value" @click="loadMore" class="w-full border border-gray-700 py-4 px-6 hover:bg-blue-600 active:bg-blue-700">Load More...</button>
            </div>
        </div>
    </div>
</template>
