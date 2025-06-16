<template>
  <div class="min-h-screen flex flex-col">
    <AppSidebar />
    <div :class="[
      'flex flex-col min-h-screen transition-all duration-300',
      sidebarStore.isDesktopOpen ? 'lg:ml-64' : 'lg:ml-20'
    ]">
      <AppHeader @toggle-sidebar="sidebarStore.toggleDesktop" />
      <CalendarModal v-if="headerStore.showCalendar" />
      <main class="flex-1 p-4 lg:p-6 max-w-full overflow-x-hidden">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '~/components/AppSidebar.vue'
import AppHeader from '~/components/AppHeader.vue'
import CalendarModal from '~/components/ui/modal/Calendar.vue'
import { useSidebarStore, useHeaderStore } from '@/stores'

const sidebarStore = useSidebarStore()
const headerStore = useHeaderStore()

</script>
