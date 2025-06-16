<template>
    <div
        class="card rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-3">
                <div :class="project.color" class="w-10 h-10 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900">{{ project.name }}</h3>
                    <p class="text-sm text-gray-500">{{ project.client }}</p>
                </div>
            </div>

            <div class="relative" ref="dropdownRef">
                <button @click="toggleDropdown" class="text-gray-400 hover:text-gray-600">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button>

                <div v-if="showDropdown"
                    class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                    <NuxtLink :to="`/project/${project.id}`"
                        class="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <img src="/images/icon/edit.svg" class="mr-2" alt=""> Edit
                    </NuxtLink>
                    <button @click="deleteProject"
                        class="w-full flex items-center text-left px-4 py-2 text-sm hover:bg-red-100">
                        <img src="/images/icon/delete.svg" class="mr-2" alt="">
                        Delete
                    </button>
                </div>
            </div>
        </div>

        <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ project.description }}</p>

        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4 text-sm text-gray-500">
                <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-6v6m0 0v6m0-6h6m-6 0H9" />
                    </svg>
                    <span>{{ project.tasks }} tasks</span>
                </div>
                <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{{ project.dueDate }}</span>
                </div>
            </div>

            <span :class="statusColors(project.status)" class="px-2 py-1 rounded-full text-xs font-medium">
                {{ project.status }}
            </span>
        </div>

        <div class="mb-4">
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-700">Progress</span>
                <span class="text-sm text-gray-500">{{ project.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div :class="project.progressColor" class="h-2 rounded-full transition-all duration-300"
                    :style="{ width: project.progress + '%' }"></div>
            </div>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Team:</span>
                <div class="flex -space-x-2">
                    <img v-for="(member, index) in project.team.slice(0, 4)" :key="index" :src="member"
                        :alt="`Team member ${index + 1}`" class="w-6 h-6 rounded-full border-2 border-white">
                    <div v-if="project.team.length > 4"
                        class="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                        +{{ project.team.length - 4 }}
                    </div>
                </div>
            </div>

            <div class="flex items-center space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { statusColors } from "@/utils"

const props = defineProps(['project'])
const emit = defineEmits(['delete'])
const showDropdown = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        showDropdown.value = false
    }
}

const deleteProject = () => {
    emit('delete', props.project.id)
    showDropdown.value = false
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>


<style lang="scss" scoped></style>