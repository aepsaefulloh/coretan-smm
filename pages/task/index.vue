<template>
  <div>
    <div class="flex flex-col space-y-4">
      <Filter @funSearch="funSearch" @changeView="changeView" :activeView="currentView" />
      <Tab v-if="currentView === 'board'" />
      
      <!-- Board View -->
      <TaskBoard v-if="currentView === 'board'" :task="task" @openTaskModal="openTaskModal" />
      
      <!-- Grid View -->
      <TaskGrid v-if="currentView === 'grid'" :tasks="task" @openTaskModal="openTaskModal" />
    </div>
  </div>
  <TaskModal :is-open="isModalOpen" :task="selectedTask" @close="closeTaskModal" />
</template>

<script setup>
import Filter from '~/components/task/Filter.vue'
import Tab from '~/components/task/Tab.vue'
import TaskBoard from '~/components/task/Board.vue'
import TaskGrid from '~/components/task/Grid.vue'
import TaskModal from '~/components/task/Modal.vue'

import { useTaskStore } from '@/stores'

const taskStore = useTaskStore()

const searchTask = ref('')
const isModalOpen = ref(false)
const selectedTask = ref(null)
const currentView = ref('board') // 'board' or 'grid'

const task = computed(() => taskStore.getTask)

const funSearch = (value) => {
  searchTask.value = value
  console.log('Search task:', searchTask.value)
}

const changeView = (view) => {
  currentView.value = view
}

const openTaskModal = (task) => {
  selectedTask.value = task
  isModalOpen.value = true
}

const closeTaskModal = () => {
  isModalOpen.value = false
  selectedTask.value = null
}
</script>