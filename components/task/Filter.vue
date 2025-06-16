<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input type="text" placeholder="Search..." v-model="searchText" @input="search"
                    class="block w-full pl-10 pr-3 py-2 border-0 rounded-[12px] dark:bg-gray-700  dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            </div>
            
            <!-- View Toggle -->
            <ViewToggle :activeView="activeView" @changeView="changeView" />
        </div>
        
        <div class="flex space-x-2">
            <div class="relative">
                <button @click="showFilters = !showFilters" class="btn btn-outline flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd" />
                    </svg>
                    Filter
                </button>
                <div v-if="showFilters"
                    class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 p-2 z-10">
                    <div class="py-1">
                        <div class="px-3 py-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                            <div class="mt-1 space-y-1">
                                <label class="flex items-center">
                                    <input type="checkbox"
                                        class="rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-700" />
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">High</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox"
                                        class="rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-700" />
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Medium</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox"
                                        class="rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-700" />
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Low</span>
                                </label>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                        <div class="px-3 py-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tags</label>
                            <div class="mt-1 space-y-1">
                                <label class="flex items-center">
                                    <input type="checkbox"
                                        class="rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-700" />
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Design</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox"
                                        class="rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-700" />
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">SMM</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox"
                                        class="rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-700" />
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Script Writing</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd" />
                </svg>
                Create Task
            </button>
        </div>
    </div>
</template>

<script setup>
import ViewToggle from './ViewToggle.vue'

const emit = defineEmits(['funSearch', 'changeView'])
const props = defineProps(['activeView'])

const showFilters = ref(false)
const searchText = ref('')

const search = () => {
    emit('funSearch', searchText.value)
}

const changeView = (view) => {
    emit('changeView', view)
}
</script>