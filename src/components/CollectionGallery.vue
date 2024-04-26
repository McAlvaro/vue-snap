<script setup>

defineProps({ collections: Array });

</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(collection, index) in collections" :key="index" class="relative h-72">
            <a :href="collection.links.html" target="_blank">
                <div class="w-full h-full flex flex-col">

                    <img class="h-2/3 w-full rounded-t-lg" :src="collection.preview_photos[0]" alt="" loading="lazy">
                    <div class="w-full h-1/3 flex flex-row pt-1">
                        <img class="h-auto w-1/2 rounded-bl-lg pr-1" :src="collection.preview_photos[1]" alt=""
                            loading="lazy">
                        <img class="h-auto w-1/2 rounded-br-lg" :src="collection.preview_photos[2]" alt=""
                            loading="lazy">

                    </div>
                </div>
                <div
                    class="absolute inset-0 flex items-end justify-start opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent to-gray-900">
                    <div class="w-full flex flex-row items-center justify-between px-4 py-1 ">
                        <div class="flex flex-row items-center">
                            <span class="ml-3 text-white">{{ collection.title }}</span>
                        </div>
                        <div class="flex flex-row items-center">
                            <svg class="w-4 h-4" fill="currentColor"  viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg"><path d="M0.375 0.15a0.075 0.075 0 0 1 0.075 0.071L0.45 0.225v0.25a0.075 0.075 0 0 1 -0.071 0.075L0.375 0.55H0.125a0.075 0.075 0 0 1 -0.075 -0.071L0.05 0.475V0.225a0.075 0.075 0 0 1 0.071 -0.075L0.125 0.15zm0.025 0.219 -0.081 0.097a0.025 0.025 0 0 1 -0.035 0.004l-0.002 -0.002L0.225 0.41 0.135 0.5H0.375a0.025 0.025 0 0 0 0.025 -0.022L0.4 0.475zM0.475 0.05a0.075 0.075 0 0 1 0.075 0.071L0.55 0.125v0.325a0.025 0.025 0 0 1 -0.05 0.003L0.5 0.45V0.125a0.025 0.025 0 0 0 -0.022 -0.025L0.475 0.1H0.15a0.025 0.025 0 0 1 -0.003 -0.05L0.15 0.05zm-0.1 0.15H0.125a0.025 0.025 0 0 0 -0.025 0.022L0.1 0.225v0.24l0.107 -0.107a0.025 0.025 0 0 1 0.033 -0.002l0.002 0.002 0.056 0.056L0.4 0.291V0.225a0.025 0.025 0 0 0 -0.022 -0.025zM0.163 0.225a0.038 0.038 0 1 1 0 0.075 0.038 0.038 0 0 1 0 -0.075"/></svg>
                            <span class="ml-2 font-light">{{ collection.total_photos }}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
