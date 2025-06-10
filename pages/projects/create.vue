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
        
        <NuxtLink to="/projects" class="sidebar-item active">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Projects
        </NuxtLink>
        
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
            <NuxtLink to="/projects" class="p-1 text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </NuxtLink>
            <h1 class="text-2xl font-bold text-gray-900">Create New Project</h1>
          </div>
          
          <div class="flex items-center space-x-4">
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

      <!-- Form Content -->
      <div class="flex-1 overflow-auto p-6">
        <div class="max-w-4xl mx-auto">
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
                  <input
                    id="projectName"
                    v-model="form.projectName"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter project name"
                  />
                </div>

                <!-- Client Name -->
                <div>
                  <label for="clientName" class="block text-sm font-medium text-gray-700 mb-2">
                    Client Name *
                  </label>
                  <input
                    id="clientName"
                    v-model="form.clientName"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter client name"
                  />
                </div>

                <!-- Project Type -->
                <div>
                  <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <!-- Priority -->
                <div>
                  <label for="priority" class="block text-sm font-medium text-gray-700 mb-2">
                    Priority *
                  </label>
                  <select
                    id="priority"
                    v-model="form.priority"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
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
                  <select
                    id="status"
                    v-model="form.status"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select status</option>
                    <option value="planning">Planning</option>
                    <option value="active">Active</option>
                    <option value="on-hold">On Hold</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <!-- Project Description -->
                <div class="md:col-span-2">
                  <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    rows="4"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the project goals, scope, and requirements..."
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Timeline & Budget -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 class="text-lg font-semibold text-gray-900 mb-6">Timeline & Budget</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Start Date -->
                <div>
                  <label for="startDate" class="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    id="startDate"
                    v-model="form.startDate"
                    type="date"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <!-- End Date -->
                <div>
                  <label for="endDate" class="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    id="endDate"
                    v-model="form.endDate"
                    type="date"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <!-- Budget -->
                <div>
                  <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      id="budget"
                      v-model="form.budget"
                      type="number"
                      min="0"
                      step="0.01"
                      class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <!-- Currency -->
                <div>
                  <label for="currency" class="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    id="currency"
                    v-model="form.currency"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="IDR">IDR - Indonesian Rupiah</option>
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
                  <select
                    id="projectManager"
                    v-model="form.projectManager"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
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
                      <input
                        :id="`member-${member.id}`"
                        v-model="form.teamMembers"
                        :value="member.id"
                        type="checkbox"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <img :src="member.avatar" :alt="member.name" class="w-8 h-8 rounded-full">
                      <div class="flex-1">
                        <label :for="`member-${member.id}`" class="text-sm font-medium text-gray-900 cursor-pointer">
                          {{ member.name }}
                        </label>
                        <p class="text-xs text-gray-500">{{ member.role }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Settings -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 class="text-lg font-semibold text-gray-900 mb-6">Project Settings</h2>
              
              <div class="space-y-4">
                <!-- Notifications -->
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Email Notifications</h3>
                    <p class="text-sm text-gray-500">Send email updates to team members</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="form.emailNotifications" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <!-- Public Project -->
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Public Project</h3>
                    <p class="text-sm text-gray-500">Make this project visible to all team members</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="form.isPublic" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <!-- Auto Archive -->
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Auto Archive</h3>
                    <p class="text-sm text-gray-500">Automatically archive project when completed</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="form.autoArchive" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
              <NuxtLink 
                to="/projects" 
                class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </NuxtLink>
              
              <div class="flex space-x-3">
                <button
                  type="button"
                  @click="saveDraft"
                  class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {{ isLoading ? 'Creating...' : 'Create Project' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Form data
const form = ref({
  projectName: '',
  clientName: '',
  projectType: '',
  priority: '',
  status: 'planning',
  description: '',
  startDate: '',
  endDate: '',
  budget: '',
  currency: 'USD',
  projectManager: '',
  teamMembers: [],
  emailNotifications: true,
  isPublic: false,
  autoArchive: true
})

const isLoading = ref(false)

// Team members data
const teamMembers = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Frontend Developer',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Project Manager',
    avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
  },
  {
    id: 4,
    name: 'Alex Rodriguez',
    role: 'Backend Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'QA Engineer',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
  },
  {
    id: 6,
    name: 'David Brown',
    role: 'DevOps Engineer',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
  }
])

// Methods
const handleCreateProject = async () => {
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Creating project:', form.value)
    
    // Redirect to projects page on success
    await navigateTo('/projects')
  } catch (error) {
    console.error('Error creating project:', error)
    // Handle error (show toast, etc.)
  } finally {
    isLoading.value = false
  }
}

const saveDraft = async () => {
  try {
    // Simulate saving draft
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Saving draft:', form.value)
    
    // Show success message
    alert('Draft saved successfully!')
  } catch (error) {
    console.error('Error saving draft:', error)
  }
}

// Set default dates
onMounted(() => {
  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  
  form.value.startDate = today.toISOString().split('T')[0]
  form.value.endDate = nextMonth.toISOString().split('T')[0]
})

// SEO
useHead({
  title: 'Create Project - Task Management',
  meta: [
    { name: 'description', content: 'Create a new project with team assignment and timeline' }
  ]
})
</script>