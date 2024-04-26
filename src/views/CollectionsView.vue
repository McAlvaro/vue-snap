<script setup>
import CollectionGallery from '@/components/CollectionGallery.vue';
import Search from '@/components/Search.vue';
import { api } from '@/services/api';
import { onMounted, ref } from 'vue';

const collections = ref([]);
const search = ref(null);

const searchBy = async (term) => {
    search.value = term;
    collections.value = await api.getListCollections(term);
};

const loadMore = async () => {
    collections.value = collections.value.concat(await api.getListCollections(search.value));
};

onMounted(async () => {
    collections.value = await api.getListCollections();
});
</script>
<template>
    <div class="w-full mt-6">
        <div class="flex flex-col space-y-6">
            <div class="w-full">
                <Search @search-by="searchBy" />
            </div>
            <CollectionGallery :collections="collections" />
            <div>
                <button v-show="! api.loading.value" @click="loadMore" class="w-full border border-gray-700 py-4 px-6 hover:bg-blue-600 active:bg-blue-700">Load More...</button>
            </div>
        </div>
    </div>
</template>
