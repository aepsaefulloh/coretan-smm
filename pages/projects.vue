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
        <NuxtLink to="/dashboard" class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Dashboard
        </NuxtLink>
        
        <div class="sidebar-item active">
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
            <h1 class="text-2xl font-bold text-gray-900">Projects</h1>
            <span class="text-sm text-gray-500">Manage your projects and teams</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- View Toggle -->
            <div class="flex border border-gray-300 rounded-lg">
              <button class="p-2 bg-blue-600 text-white rounded-l-lg">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button class="p-2 text-gray-400 hover:text-gray-600 rounded-r-lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <!-- Create Project Button -->
            <button class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span class="text-sm font-medium">New Project</span>
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

      <!-- Projects Content -->
      <div class="flex-1 overflow-auto p-6">
        <!-- Filter and Search -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-4">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search projects..." 
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>On Hold</option>
            </select>
            
            <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Teams</option>
              <option>Design Team</option>
              <option>Development Team</option>
              <option>Marketing Team</option>
            </select>
          </div>
          
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <span>{{ projects.length }} projects</span>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <!-- Project Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div :class="project.color" class="w-10 h-10 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ project.name }}</h3>
                  <p class="text-sm text-gray-500">{{ project.client }}</p>
                </div>
              </div>
              
              <button class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>

            <!-- Project Description -->
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ project.description }}</p>

            <!-- Project Stats -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <div class="flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-6v6m0 0v6m0-6h6m-6 0H9" />
                  </svg>
                  <span>{{ project.tasks }} tasks</span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ project.dueDate }}</span>
                </div>
              </div>
              
              <span :class="getStatusClass(project.status)" class="px-2 py-1 rounded-full text-xs font-medium">
                {{ project.status }}
              </span>
            </div>

            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-700">Progress</span>
                <span class="text-sm text-gray-500">{{ project.progress }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  :class="project.progressColor" 
                  class="h-2 rounded-full transition-all duration-300" 
                  :style="{ width: project.progress + '%' }"
                ></div>
              </div>
            </div>

            <!-- Team Members -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Team:</span>
                <div class="flex -space-x-2">
                  <img 
                    v-for="(member, index) in project.team.slice(0, 4)" 
                    :key="index"
                    :src="member" 
                    :alt="`Team member ${index + 1}`"
                    class="w-6 h-6 rounded-full border-2 border-white"
                  >
                  <div 
                    v-if="project.team.length > 4"
                    class="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600"
                  >
                    +{{ project.team.length - 4 }}
                  </div>
                </div>
              </div>
              
              <div class="flex items-center space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State (if no projects) -->
        <div v-if="projects.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p class="text-gray-500 mb-4">Get started by creating your first project.</p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Project
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Projects data
const projects = ref([
  {
    id: 1,
    name: 'Website Redesign',
    client: 'TechCorp Inc.',
    description: 'Complete redesign of the company website with modern UI/UX principles and responsive design.',
    status: 'Active',
    progress: 75,
    tasks: 24,
    dueDate: 'Mar 15, 2025',
    color: 'bg-blue-500',
    progressColor: 'bg-blue-500',
    team: [
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
    ]
  },
  {
    id: 2,
    name: 'Mobile Application',
    client: 'StartupXYZ',
    description: 'Native mobile app development for iOS and Android with real-time features and cloud integration.',
    status: 'Active',
    progress: 45,
    tasks: 18,
    dueDate: 'Apr 20, 2025',
    color: 'bg-green-500',
    progressColor: 'bg-green-500',
    team: [
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
    ]
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    client: 'Fashion Brand',
    description: 'Comprehensive digital marketing campaign including social media, content creation, and advertising.',
    status: 'Completed',
    progress: 100,
    tasks: 12,
    dueDate: 'Feb 28, 2025',
    color: 'bg-purple-500',
    progressColor: 'bg-green-500',
    team: [
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
    ]
  },
  {
    id: 4,
    name: 'API Development',
    client: 'FinTech Solutions',
    description: 'RESTful API development with authentication, payment processing, and third-party integrations.',
    status: 'Active',
    progress: 30,
    tasks: 15,
    dueDate: 'May 10, 2025',
    color: 'bg-yellow-500',
    progressColor: 'bg-yellow-500',
    team: [
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
    ]
  },
  {
    id: 5,
    name: 'E-commerce Platform',
    client: 'Retail Company',
    description: 'Full-featured e-commerce platform with inventory management, payment gateway, and analytics.',
    status: 'On Hold',
    progress: 20,
    tasks: 32,
    dueDate: 'Jun 30, 2025',
    color: 'bg-red-500',
    progressColor: 'bg-red-500',
    team: [
      'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
    ]
  },
  {
    id: 6,
    name: 'Data Analytics Dashboard',
    client: 'Analytics Corp',
    description: 'Interactive dashboard for data visualization with real-time charts, filters, and export capabilities.',
    status: 'Active',
    progress: 60,
    tasks: 20,
    dueDate: 'Apr 5, 2025',
    color: 'bg-indigo-500',
    progressColor: 'bg-indigo-500',
    team: [
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
    ]
  }
])

// Methods
const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-700'
    case 'completed':
      return 'bg-blue-100 text-blue-700'
    case 'on hold':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

// SEO
useHead({
  title: 'Projects - Task Management',
  meta: [
    { name: 'description', content: 'Manage your projects, teams, and track progress' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>