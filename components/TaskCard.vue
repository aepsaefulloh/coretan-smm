<template>
  <div class="task-card">
    <!-- Task Header -->
    <div class="flex items-start justify-between mb-3">
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
    </div>

    <!-- Task Title -->
    <h4 class="font-medium text-gray-900 mb-3 leading-5">{{ task.title }}</h4>

    <!-- Task Meta -->
    <div class="flex items-center space-x-3 mb-3 text-xs">
      <span :class="getPriorityClass(task.priority)">{{ task.priority }}</span>
      <span class="text-gray-400">•</span>
      <span class="text-gray-500">{{ task.project }}</span>
      <span class="text-gray-400">•</span>
      <span class="text-gray-500 flex items-center">
        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ task.date }}
      </span>
    </div>

    <!-- Status and Progress -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-3">
        <span :class="getStatusClass(task.status)">{{ task.status }}</span>
        <button class="text-gray-400 hover:text-gray-600">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <span class="text-sm text-gray-500">{{ task.progress }}%</span>
    </div>

    <!-- Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-1 mb-4" v-if="task.progress > 0">
      <div 
        class="bg-blue-600 h-1 rounded-full transition-all duration-300" 
        :style="{ width: task.progress + '%' }"
      ></div>
    </div>

    <!-- Tags and Actions -->
    <div class="flex items-center justify-between">
      <div class="flex flex-wrap gap-1">
        <span 
          v-for="tag in task.tags" 
          :key="tag"
          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
        >
          {{ tag }}
        </span>
      </div>
      
      <div class="flex items-center space-x-2">
        <!-- Comments -->
        <button class="flex items-center text-gray-400 hover:text-gray-600">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span class="text-xs">{{ task.comments }}</span>
        </button>

        <!-- Assignees -->
        <div class="flex -space-x-2">
          <img 
            v-for="(assignee, index) in task.assignees.slice(0, 3)" 
            :key="index"
            :src="assignee" 
            :alt="`Assignee ${index + 1}`"
            class="w-6 h-6 rounded-full border-2 border-white"
          >
          <div 
            v-if="task.assignees.length > 3"
            class="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600"
          >
            +{{ task.assignees.length - 3 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const getPriorityClass = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'priority-high'
    case 'medium':
      return 'priority-medium'
    case 'low':
      return 'priority-low'
    default:
      return 'priority-medium'
  }
}

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'status-badge status-pending'
    case 'ongoing':
      return 'status-badge status-ongoing'
    case 'review':
      return 'status-badge status-review'
    case 'completed':
      return 'status-badge status-completed'
    default:
      return 'status-badge status-pending'
  }
}
</script>