<template>
    <div class="flex flex-col space-y-4">

        <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
            <h1 class="text-2xl font-bold">Welcome back, {{ profile?.full_name }}! 👋</h1>
            <p class="text-blue-100 mt-2">Here's what's happening with your projects today.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mb-8">
            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <Calendar />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Dashboard'
})

import { useProfileStore } from '@/stores'
import Calendar from '@/components/ui/Calendar.vue'
const profileStore = useProfileStore()
const profile = computed(() => profileStore.getProfile);




</script>