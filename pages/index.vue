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
          <span class="text-lg font-semibold text-gray-900">Logo</span>
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
        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Dashboard
        </div>
        
        <div class="sidebar-item">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Project
        </div>
        
        <div class="sidebar-item active">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-6v6m0 0v6m0-6h6m-6 0H9" />
          </svg>
          Task
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
          FAQ
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
            <button class="p-1 text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 class="text-xl font-semibold text-gray-900">Task</h1>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Search -->
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search" 
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <!-- Filter Button -->
            <button class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              <span class="text-sm text-gray-700">Filter</span>
            </button>
            
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
            
            <!-- Create Task Button -->
            <button class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span class="text-sm font-medium">Create Task</span>
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

      <!-- Task Columns -->
      <div class="flex-1 overflow-auto p-6">
        <div class="grid grid-cols-4 gap-6 h-full">
          <!-- Pending Tasks -->
          <div class="flex flex-col">
            <div class="bg-blue-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
              <h3 class="font-medium">Pending Tasks</h3>
              <span class="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">7</span>
            </div>
            <div class="bg-blue-50 p-4 flex-1 rounded-b-lg">
              <TaskCard 
                v-for="task in pendingTasks" 
                :key="task.id" 
                :task="task" 
              />
            </div>
          </div>

          <!-- On Going Tasks -->
          <div class="flex flex-col">
            <div class="bg-yellow-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
              <h3 class="font-medium">On Going Tasks</h3>
              <span class="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">3</span>
            </div>
            <div class="bg-yellow-50 p-4 flex-1 rounded-b-lg">
              <TaskCard 
                v-for="task in ongoingTasks" 
                :key="task.id" 
                :task="task" 
              />
            </div>
          </div>

          <!-- In Review -->
          <div class="flex flex-col">
            <div class="bg-purple-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
              <h3 class="font-medium">In Review</h3>
              <span class="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">3</span>
            </div>
            <div class="bg-purple-50 p-4 flex-1 rounded-b-lg">
              <TaskCard 
                v-for="task in reviewTasks" 
                :key="task.id" 
                :task="task" 
              />
            </div>
          </div>

          <!-- Completed Tasks -->
          <div class="flex flex-col">
            <div class="bg-green-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
              <h3 class="font-medium">Completed Tasks</h3>
              <span class="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">3</span>
            </div>
            <div class="bg-green-50 p-4 flex-1 rounded-b-lg">
              <TaskCard 
                v-for="task in completedTasks" 
                :key="task.id" 
                :task="task" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pendingTasks = [
  {
    id: 1,
    title: "Create Mockup Trisaktii (Pitching Trisaktii)",
    priority: "High",
    project: "General Project",
    date: "10 Februari 2025",
    status: "Pending",
    progress: 0,
    tags: ["SMM", "Design", "Script Writing"],
    assignees: [
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
    ],
    comments: 5
  },
  {
    id: 2,
    title: "Create Mockup Trisaktii (Pitching Trisaktii)",
    priority: "Medium",
    project: "General Projects",
    date: "10 Februari 2025",
    status: "Pending",
    progress: 0,
    tags: ["SMM", "Design", "Script Writing"],
    assignees: [
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
    ],
    comments: 3
  },
  {
    id: 3,
    title: "Create Mockup Trisaktii (Pitching Trisaktii)",
    priority: "High",
    project: "General Project",
    date: "10 Februari 2025",
    status: "Pending",
    progress: 0,
    tags: ["SMM", "Design", "Script Writing"],
    assignees: [
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
    ],
    comments: 2
  }
]

const ongoingTasks = [
  {
    id: 4,
    title: "Create Mockup Trisaktii (Pitching Trisaktii)",
    priority: "High",
    project: "General Project",
    date: "10 Februari 2025",
    status: "Ongoing",
    progress: 45,
    tags: ["SMM", "Design", "Script Writing"],
    assignees: [
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
    ],
    comments: 8
  }
]

const reviewTasks = [
  {
    id: 5,
    title: "Create Mockup Trisaktii (Pitching Trisaktii)",
    priority: "Medium",
    project: "General Project",
    date: "10 Februari 2025",
    status: "Review",
    progress: 80,
    tags: ["SMM", "Design", "Script Writing"],
    assignees: [
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
    ],
    comments: 4
  }
]

const completedTasks = [
  {
    id: 6,
    title: "Create Mockup Trisaktii (Pitching Trisaktii)",
    priority: "High",
    project: "General Project",
    date: "10 Februari 2025",
    status: "Completed",
    progress: 100,
    tags: ["SMM", "Design", "Script Writing"],
    assignees: [
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces",
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
    ],
    comments: 12
  }
]
</script>