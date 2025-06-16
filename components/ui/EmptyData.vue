<template>
    <div class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">{{ title }}</h3>
        <p class="text-gray-500 mb-4">{{ description }}</p>
        <NuxtLink :to="to" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Item
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'No Item yet'
    },
    description: {
        type: String,
                required: false,
        default: 'Get started by creating your first item.'
    },
    to: {
        type: String,
                required: false,

        default: '/'
    }

})
</script>

<style lang="scss" scoped></style>