<template>
  <div class="flex flex-col space-y-4">

    <!-- Welcome Message -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
      <h1 class="text-2xl font-bold">Welcome back, {{ profile?.full_name }}! 👋</h1>
      <p class="text-blue-100 mt-2">Here's what's happening with your projects today.</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Tasks</p>
            <p class="text-3xl font-bold text-gray-900">{{ stats.totalTasks }}</p>
            <p class="text-sm text-green-600 mt-1">+12% from last month</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-6v6m0 0v6m0-6h6m-6 0H9" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Completed</p>
            <p class="text-3xl font-bold text-gray-900">{{ stats.completed }}</p>
            <p class="text-sm text-green-600 mt-1">+8% from last month</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">In Progress</p>
            <p class="text-3xl font-bold text-gray-900">{{ stats.inProgress }}</p>
            <p class="text-sm text-yellow-600 mt-1">+5% from last month</p>
          </div>
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Team Members</p>
            <p class="text-3xl font-bold text-gray-900">{{ stats.teamMembers }}</p>
            <p class="text-sm text-blue-600 mt-1">+2 new this month</p>
          </div>
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts and Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- Task Progress Chart -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Task Progress Overview</h3>
          <select class="text-sm border border-gray-300 rounded-lg px-3 py-1">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>

        <!-- Simple Chart Representation -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Completed Tasks</span>
            <span class="text-sm font-medium">75%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">In Progress</span>
            <span class="text-sm font-medium">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-yellow-500 h-2 rounded-full" style="width: 45%"></div>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Pending</span>
            <span class="text-sm font-medium">30%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-red-500 h-2 rounded-full" style="width: 30%"></div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div class="space-y-4">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-3">
            <div :class="activity.iconBg" class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4" :class="activity.iconColor" fill="currentColor" viewBox="0 0 20 20">
                <path v-if="activity.type === 'completed'" fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
                <path v-else-if="activity.type === 'created'" fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd" />
                <path v-else fill-rule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900">{{ activity.message }}</p>
              <p class="text-xs text-gray-500">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects and Team -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Active Projects -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Active Projects</h3>
          <button class="text-sm text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div class="space-y-4">
          <div v-for="project in activeProjects" :key="project.id"
            class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
              <div :class="project.color" class="w-3 h-3 rounded-full"></div>
              <div>
                <h4 class="font-medium text-gray-900">{{ project.name }}</h4>
                <p class="text-sm text-gray-500">{{ project.tasks }} tasks</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ project.progress }}%</p>
              <div class="w-20 bg-gray-200 rounded-full h-1 mt-1">
                <div :class="project.progressColor" class="h-1 rounded-full" :style="{ width: project.progress + '%' }">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Team Performance</h3>
          <button class="text-sm text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div class="space-y-4">
          <div v-for="member in teamMembers" :key="member.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <img :src="member.avatar" :alt="member.name" class="w-10 h-10 rounded-full">
              <div>
                <h4 class="font-medium text-gray-900">{{ member.name }}</h4>
                <p class="text-sm text-gray-500">{{ member.role }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ member.completedTasks }} tasks</p>
              <p class="text-xs text-gray-500">{{ member.efficiency }}% efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Dashboard'
})

import { useProfileStore } from '@/stores'
const profileStore = useProfileStore()
const profile = computed(() => profileStore.getProfile);


const stats = ref({
  totalTasks: 156,
  completed: 89,
  inProgress: 34,
  teamMembers: 12
})

// Recent activities
const recentActivities = ref([
  {
    id: 1,
    type: 'completed',
    message: 'Task "Design Homepage" completed by Sarah',
    time: '2 minutes ago',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 2,
    type: 'created',
    message: 'New task "API Integration" created',
    time: '15 minutes ago',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 3,
    type: 'updated',
    message: 'Project "Mobile App" status updated',
    time: '1 hour ago',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    id: 4,
    type: 'completed',
    message: 'Task "User Testing" completed by Mike',
    time: '2 hours ago',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 5,
    type: 'created',
    message: 'New team member joined the project',
    time: '3 hours ago',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
])

// Active projects
const activeProjects = ref([
  {
    id: 1,
    name: 'Website Redesign',
    tasks: 24,
    progress: 75,
    color: 'bg-blue-500',
    progressColor: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Mobile Application',
    tasks: 18,
    progress: 45,
    color: 'bg-green-500',
    progressColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    tasks: 12,
    progress: 90,
    color: 'bg-purple-500',
    progressColor: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'API Development',
    tasks: 15,
    progress: 30,
    color: 'bg-yellow-500',
    progressColor: 'bg-yellow-500'
  }
])

// Team members
const teamMembers = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces',
    completedTasks: 23,
    efficiency: 95
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Frontend Developer',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces',
    completedTasks: 19,
    efficiency: 88
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Project Manager',
    avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces',
    completedTasks: 31,
    efficiency: 92
  },
  {
    id: 4,
    name: 'Alex Rodriguez',
    role: 'Backend Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces',
    completedTasks: 16,
    efficiency: 85
  }
])

onMounted(() => {
  profileStore.initializeProfile();
})
</script>