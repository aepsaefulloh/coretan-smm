<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white w-full max-w-5xl rounded-lg shadow-xl p-6 relative">
      <button @click="headerStore.toggleCalendar" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>

      </button>
      <client-only>
        <FullCalendar :options="calendarOptions" />
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useTaskStore, useHeaderStore } from '@/stores'
import { colorTask } from '@/utils'
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

const taskStore = useTaskStore()
const headerStore = useHeaderStore()
const task = computed(() => taskStore.getTask)
const holidayEvents = ref([])

const calendarOptions = ref({
  plugins: [interactionPlugin, dayGridPlugin],
  initialView: 'dayGridMonth',
  nowIndicator: true,
  editable: false,
  events: holidayEvents,
  locale: 'id',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek'
  }
})

onMounted(async () => {
  try {
    const res = await fetch('https://libur.deno.dev/api')
    const holidays = await res.json()

    holidayEvents.value = [
      ...holidays.map(item => ({
        title: item.name,
        start: item.date,
        allDay: true,
        color: '#ef4444'
      })),
      ...task.value.map(task => ({
        title: task.title,
        start: task.start_date,
        end: task.due_date,
        allDay: true,
        color: colorTask(task.category)
      }))
    ]
  } catch (err) {
    console.error('Gagal mengambil data hari libur:', err)
  }
})
</script>
