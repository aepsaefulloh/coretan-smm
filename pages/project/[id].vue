<template>
    <div class="flex flex-col space-y-8">
        <form @submit.prevent="handleCreateProject" class="space-y-8">
            <!-- Project Basic Information -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">Project Information</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Project Name -->
                    <div class="md:col-span-2">
                        <label for="projectName" class="block text-sm font-medium text-gray-700 mb-2">
                            Project Name *
                        </label>
                        <input id="projectName" v-model="form.projectName" type="text" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter project name" />
                    </div>

                    <!-- Client Name -->
                    <CustomSelect v-model="form.clientName" :options="dummyClients" label="Client Name *"  />

                    <!-- Project Type -->
                    <div>
                        <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">
                            Project Type *
                        </label>
                        <select id="projectType" v-model="form.projectType" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="">Select project type</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-app">Mobile Application</option>
                            <option value="design">Design</option>
                            <option value="marketing">Marketing</option>
                            <option value="consulting">Consulting</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <!-- Project Description -->
                    <div class="md:col-span-2">
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                            Project Description *
                        </label>
                        <textarea id="description" v-model="form.description" rows="4" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Describe the project goals, scope, and requirements..."></textarea>
                    </div>
                </div>
            </div>

            <!-- Timeline & Priority -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">Timeline & Priority</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Start Date -->
                    <div>
                        <label for="startDate" class="block text-sm font-medium text-gray-700 mb-2">
                            Start Date *
                        </label>
                        <input id="startDate" v-model="form.startDate" type="date" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <!-- End Date -->
                    <div>
                        <label for="endDate" class="block text-sm font-medium text-gray-700 mb-2">
                            End Date *
                        </label>
                        <input id="endDate" v-model="form.endDate" type="date" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <!-- Priority -->
                    <div>
                        <label for="priority" class="block text-sm font-medium text-gray-700 mb-2">
                            Priority *
                        </label>
                        <select id="priority" v-model="form.priority" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="">Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>

                    <!-- Status -->
                    <div>
                        <label for="status" class="block text-sm font-medium text-gray-700 mb-2">
                            Status *
                        </label>
                        <select id="status" v-model="form.status" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="">Select status</option>
                            <option value="planning">Planning</option>
                            <option value="active">Active</option>
                            <option value="on-hold">On Hold</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Team Assignment -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">Team Assignment</h2>

                <div class="space-y-6">
                    <!-- Project Manager -->
                    <div>
                        <label for="projectManager" class="block text-sm font-medium text-gray-700 mb-2">
                            Project Manager *
                        </label>
                        <select id="projectManager" v-model="form.projectManager" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="">Select project manager</option>
                            <option v-for="member in teamMembers" :key="member.id" :value="member.id">
                                {{ member.name }} - {{ member.role }}
                            </option>
                        </select>
                    </div>

                    <!-- Team Members -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Team Members
                        </label>
                        <div class="space-y-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3">
                            <div v-for="member in teamMembers" :key="member.id" class="flex items-center space-x-3">
                                <input :id="`member-${member.id}`" v-model="form.teamMembers" :value="member.id"
                                    type="checkbox"
                                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <img :src="member.avatar" :alt="member.name" class="w-8 h-8 rounded-full">
                                <div class="flex-1">
                                    <label :for="`member-${member.id}`"
                                        class="text-sm font-medium text-gray-900 cursor-pointer">
                                        {{ member.name }}
                                    </label>
                                    <p class="text-xs text-gray-500">{{ member.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form Actions -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                <NuxtLink to="/projects"
                    class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                </NuxtLink>

                <div class="flex space-x-3">
                    <button type="button" @click="saveDraft" :disabled="projectStore.isLoadingDraft"
                        class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ projectStore.isLoadingDraft ? 'drafting...' : 'Save as Draft' }}
                    </button>
                    <button type="submit" :disabled="projectStore.isLoadingCreate" v-if="!isEditMode"
                        class="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                        {{ projectStore.isLoadingCreate ? 'Creating...' : 'Create Project' }}
                    </button>
                    <button type="submit" :disabled="projectStore.isLoadingUpdate" v-else
                        class="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                        {{ projectStore.isLoadingUpdate ? 'Editing...' : 'Edit Project' }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>

import { useUserStore, useProjectStore } from '@/stores'
import { useRoute, useRouter } from 'vue-router'
import CustomSelect from '@/components/ui/CustomSelect.vue'

const userStore = useUserStore()
const projectStore = useProjectStore()
const route = useRoute()
const router = useRouter()

const isEditMode = computed(() => route.params.id !== 'create')
const teamMembers = computed(() => userStore.getMembers)

const form = ref({
    projectName: '',
    clientName: '',
    projectType: '',
    priority: '',
    status: 'planning',
    description: '',
    startDate: '',
    endDate: '',
    projectManager: '',
    teamMembers: [],
})

const dummyClients = ref([
  { id: 1, name: 'PT. Alpha' },
  { id: 2, name: 'PT. Beta' },
  { id: 3, name: 'PT. Gamma' },
])


const handleCreateProject = async () => {
    try {
        if (isEditMode.value) {
            await projectStore.update(form.value)
        } else {
            await projectStore.submit(form.value)
        }
    } catch (error) {
        console.error('Error saving project:', error)
    }
}


const saveDraft = async () => {
    try {
        await projectStore.draft(form.value)
    } catch (error) {
        console.error('Error saving draft:', error)
    }
}


onMounted(async () => {
    const today = new Date()
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())

    form.value.startDate = today.toISOString().split('T')[0]
    form.value.endDate = nextMonth.toISOString().split('T')[0]

    if (isEditMode.value) {
        // panggil API untuk fetch detail project berdasarkan id
        try {
            const { data } = await $fetch(`/api/project/${route.params.id}`)
            form.value = data
        } catch (err) {
            console.error('Project tidak ditemukan')
            router.push('/project')
        }
    }
})

</script>