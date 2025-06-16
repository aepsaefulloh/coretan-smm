<template>
    <div class="grid grid-cols-1">
        <div class="card !p-0 flex flex-col h-full">
            <div class="p-3 flex-grow overflow-y-auto max-h-[calc(100vh-230px)]">
                <div v-for="(task, index) in task" :key="index"
                    class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 mb-3 shadow-sm hover:shadow transition-all">
                    <div class="grid grid-cols-[1fr_50px_1fr_300px_50px_50px] items-center gap-[50px]">
                        <!-- Kolom 1: Title + Info -->
                        <div>
                            <div class="flex items-center gap-2">
                                <button
                                    class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <h4 class="text-[12px] font-semibold text-gray-900 dark:text-white">
                                    {{ task.title }}
                                </h4>
                            </div>
                            <div class="text-[11px] text-gray-500 mt-0.5">General Project • {{ task.due_date }}</div>
                        </div>

                        <!-- Kolom 2: Priority badge -->
                        <div class="flex justify-center">
                            <span class="text-xs font-medium px-2 py-0.5 rounded-full text-center" :class="{
                                'bg-red-100 text-red-800': task.priority === 'High',
                                'bg-yellow-100 text-yellow-800': task.priority === 'Medium',
                                'bg-blue-100 text-blue-800': task.priority === 'Low'
                            }">
                                {{ task.priority }}
                            </span>
                        </div>

                        <!-- Kolom 3: Progress -->
                        <div class="flex items-center gap-2">
                            <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-300"
                                    :class="task.progress > 0 ? 'bg-blue-400' : 'bg-gray-400'"
                                    :style="{ width: `${task.progress}%` }">
                                </div>
                            </div>
                            <div class="flex justify-between text-xs text-gray-400 mb-1">
                                <span class="text-gray-700 dark:text-gray-300">{{ task.progress }}%</span>
                            </div>
                        </div>

                        <!-- Kolom 4: Tags -->
                        <div class="flex flex-wrap gap-1 justify-center">
                            <span v-for="(tag, tagIndex) in task.tags" :key="tagIndex"
                                class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-[#B3C8CF] text-grey-700">
                                {{ tag }}
                            </span>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                            <button class="text-gray-400 hover:text-gray-600" @click="openTaskModal(task)">
                                <img src="/images/icon/message.svg" alt="">
                            </button>

                        </div>
                        <!-- Kolom 5: Assignees + Chat Icon -->
                        <div class="flex items-center gap-2 justify-end">

                            <div class="flex -space-x-2">
                                <img v-for="(user, userIndex) in task.assignees" :key="userIndex" :src="user.avatar"
                                    :alt="user.name"
                                    class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
                                    :title="user.name" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps(['task'])
const emit = defineEmits(['openTaskModal'])

const openTaskModal = (task) => {
    console.log('emit openTaskModal', task)
    emit('openTaskModal', task)
}


</script>