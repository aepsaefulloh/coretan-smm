<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
      <!-- Logo -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-lg font-semibold text-gray-900">TaskFlow</span>
        </div>
      </div>

      <!-- Search -->
      <div class="p-4 border-b border-gray-200">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search" 
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <NuxtLink to="/dashboard" class="sidebar-item active">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Dashboard
        </NuxtLink>
        
        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Projects
        </div>
        
        <NuxtLink to="/" class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-6v6m0 0v6m0-6h6m-6 0H9" />
          </svg>
          Tasks
        </NuxtLink>

        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Team
        </div>

        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analytics
        </div>
      </nav>

      <!-- Bottom Navigation -->
      <div class="p-4 border-t border-gray-200 space-y-2">
        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </div>
        
        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Help & Support
        </div>
      </div>

      <!-- Help Widget -->
      <div class="m-4 p-4 bg-blue-600 rounded-xl text-white">
        <div class="flex items-center justify-center w-8 h-8 bg-white bg-opacity-20 rounded-full mb-3">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </div>
        <h4 class="font-semibold mb-1">Need help?</h4>
        <p class="text-sm text-blue-100 mb-3">Let us help you find the right solutions.</p>
        <button class="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg text-sm hover:bg-gray-50 transition-colors">
          CONTACT US
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
            <span class="text-sm text-gray-500">Welcome back, Jullia!</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Quick Actions -->
            <button class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span class="text-sm font-medium">New Task</span>
            </button>
            
            <!-- Notification -->
            <button class="relative p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5-5 5-5h-5m-6 10v5l-5-5 5-5v5z" />
              </svg>
              <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <!-- User Profile -->
            <div class="flex items-center space-x-3">
              <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=faces" alt="Profile" class="w-8 h-8 rounded-full">
              <span class="text-sm font-medium text-gray-900">Jullia</span>
              <button class="text-gray-400 hover:text-gray-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="flex-1 overflow-auto p-6">
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-6v6m0 0v6m0-6h6m-6 0H9" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                    <path v-if="activity.type === 'completed'" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    <path v-else-if="activity.type === 'created'" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    <path v-else fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
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
              <div v-for="project in activeProjects" :key="project.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
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
                    <div :class="project.progressColor" class="h-1 rounded-full" :style="{ width: project.progress + '%' }"></div>
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
    </div>
  </div>
</template>

<script setup>
// Dashboard statistics
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

// SEO
useHead({
  title: 'Dashboard - Task Management',
  meta: [
    { name: 'description', content: 'Task management dashboard with analytics and team overview' }
  ]
})
</script>