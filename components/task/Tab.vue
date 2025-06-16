<template>
    <div class="flex gap-4">
        <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
            class="rounded-t-xl py-[16px] px-[12px] flex justify-between items-center lg:w-1/4 cursor-pointer transition-all duration-200"
            :class="[
                activeTab === index ? 'bg-blue-400 text-white' : 'bg-white text-black',
                'border-t-4',
                tab.borderColor
            ]">
            <span class="font-semibold">{{ tab.title }}</span>
            <span :class="[
                'ml-2 text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center',
                activeTab === index ? 'bg-white/20 text-white' : 'bg-gray-200 text-black'
            ]">
                {{ tab.count }}
            </span>
        </div>
    </div>
</template>

<script setup>

const activeTab = ref(0)

const tabs = [
    { title: 'Pending Tasks', count: 7, borderColor: 'border-pink-200' },
    { title: 'On Going Tasks', count: 3, borderColor: 'border-blue-200' },
    { title: 'In Review', count: 3, borderColor: 'border-yellow-200' },
    { title: 'Completed Tasks', count: 3, borderColor: 'border-green-300' }
]
</script>
