<template>
    <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button @click="$emit('changeView', 'board')"
                class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="activeView === 'board' 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span>Board</span>
        </button>
        
        <button @click="$emit('changeView', 'grid')"
                class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="activeView === 'grid' 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Grid</span>
        </button>
    </div>
</template>

<script setup>
defineProps(['activeView'])
defineEmits(['changeView'])
</script>