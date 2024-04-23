<script setup>

defineProps({ photos: Array })
</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(row, index) in photos" class="grid gap-4" :key="index">
            <div v-for="(photo, i) in row" :key="i" class="relative">
                <img class="h-full max-w-full rounded-lg" :src="photo.urls.regular" alt="" loading="lazy">
                <div
                    class="absolute inset-0 flex items-end justify-start opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent to-gray-900">
                    <div class="w-full flex flex-row items-center justify-between px-4 py-1 ">
                        <div class="flex flex-row items-center">
                            <img :src="photo.user.profile_image.small" class="rounded-full" alt="" loading="lazy">
                            <span class="ml-3 text-white">{{photo.user.name}}</span>
                        </div>
                        <div class="flex flex-row items-center">
                            <svg class="h-4" viewBox="15.257 71.064 36 31.091" xmlns="http://www.w3.org/2000/svg" ><path d="M48.679 73.672c-3.438 -3.478 -9.169 -3.478 -12.771 0l-2.619 2.65 -2.619 -2.651c-3.438 -3.476 -9.169 -3.476 -12.771 0 -3.604 3.479 -3.44 9.275 0 12.917l15.39 15.566 15.39 -15.566a9.378 9.378 0 0 0 0 -12.915" style="fill: rgb(255, 255, 255);"/></svg>
                            <span class="ml-2 font-light">{{photo.likes}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
