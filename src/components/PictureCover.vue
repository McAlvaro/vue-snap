<script setup>

defineProps({cover_image: String});

</script>
<template>
    <div class="relative h-80 overflow-hidden rounded-xl">
        <img :src="cover_image"
            alt="Imagen" class="inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span class="text-white text-4xl font-bold">Pictures</span>
        </div>
    </div>
</template>
