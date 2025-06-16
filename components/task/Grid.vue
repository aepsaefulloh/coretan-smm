<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="(task, index) in tasks" :key="index" 
             class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
             @click="openTaskModal(task)">
            
            <!-- Task Header -->
            <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full" :class="{
                        'bg-red-500': task.priority === 'High',
                        'bg-yellow-500': task.priority === 'Medium',
                        'bg-blue-500': task.priority === 'Low'
                    }"></div>
                    <span class="text-xs font-medium px-2 py-1 rounded-full" :class="{
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': task.priority === 'High',
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': task.priority === 'Medium',
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': task.priority === 'Low'
                    }">
                        {{ task.priority }}
                    </span>
                </div>
                
                <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" @click.stop="openTaskModal(task)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
            </div>

            <!-- Task Title -->
            <h3 class="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
                {{ task.title }}
            </h3>

            <!-- Task Description -->
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                {{ task.description }}
            </p>

            <!-- Task Image -->
            <div v-if="task.images" class="mb-3">
                <img :src="task.images" :alt="task.title" 
                     class="w-full h-32 object-cover rounded-lg">
            </div>

            <!-- Progress Bar -->
            <div class="mb-3">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Progress</span>
                    <span class="text-xs font-medium text-gray-900 dark:text-white">{{ task.progress }}%</span>
                </div>
                <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-300" 
                         :class="task.progress > 0 ? 'bg-blue-500' : 'bg-gray-400'"
                         :style="{ width: `${task.progress}%` }">
                    </div>
                </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1 mb-3">
                <span v-for="(tag, tagIndex) in task.tags.slice(0, 3)" :key="tagIndex"
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                    {{ tag }}
                </span>
                <span v-if="task.tags.length > 3" 
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                    +{{ task.tags.length - 3 }}
                </span>
            </div>

            <!-- Task Footer -->
            <div class="flex items-center justify-between">
                <!-- Due Date -->
                <div class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{{ task.due_date }}</span>
                </div>

                <!-- Assignees -->
                <div class="flex items-center gap-2">
                    <div class="flex -space-x-2">
                        <img v-for="(user, userIndex) in task.assignees.slice(0, 3)" 
                             :key="userIndex" 
                             :src="user.avatar"
                             :alt="user.name"
                             class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
                             :title="user.name" />
                        <div v-if="task.assignees.length > 3"
                             class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-600 dark:text-gray-300">
                            +{{ task.assignees.length - 3 }}
                        </div>
                    </div>
                    
                    <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" @click.stop="openTaskModal(task)">
                        <img src="/images/icon/message.svg" alt="Comments" class="w-4 h-4">
                    </button>
                </div>
            </div>

            <!-- Status Badge -->
            <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium" :class="{
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': task.status === 'Completed',
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': task.status === 'On Going',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': task.status === 'Pending',
                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200': task.status === 'In Review'
                }">
                    {{ task.status }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['tasks'])
const emit = defineEmits(['openTaskModal'])

const openTaskModal = (task) => {
    emit('openTaskModal', task)
}
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>