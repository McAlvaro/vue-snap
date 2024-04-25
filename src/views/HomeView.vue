<script setup>
import Slider from '../components/Slider.vue';
import { onMounted, ref } from 'vue';
import ListCollections from '@/components/ListCollections.vue';
import { api } from '@/services/api';

const randomPhotos = ref([]);
const listCollections = ref([]);

onMounted(async () => {
    randomPhotos.value = await api.getRandomPhotos();
    listCollections.value = await api.getCollections();
});
</script>

<template>
    <div class="w-full mt-5">
        <div class="flex flex-col">
            <div class="flex flex-row">
                <div class="w-3/4">
                    <Slider :images="randomPhotos" />
                </div>
                <div class="w-1/4 ml-2">
                    <ListCollections :collections="listCollections" />
                </div>
            </div>
        </div>
    </div>
</template>
