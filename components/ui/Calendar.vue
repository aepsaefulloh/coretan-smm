<template>
    <client-only>
        <FullCalendar :options="calendarOptions" />
    </client-only>
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