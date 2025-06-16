<template>
  <aside
    class="fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 transform transition-all duration-300 ease-in-out flex flex-col"
    :class="[
      isMobile
        ? (sidebarStore.isMobileOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64')
        : (sidebarStore.isDesktopOpen ? 'translate-x-0 w-64' : 'translate-x-0 w-20')
    ]">
    <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
      <NuxtLink to="/" class="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
        <div class="flex items-center text-primary-500" v-if="sidebarStore.isDesktopOpen">
          <img src="/images/floothink-logo-dark.webp" class="md:w-32 w-24" alt="Logo" />
        </div>
      </NuxtLink>

      <!-- Desktop toggle -->
      <button @click="sidebarStore.toggleDesktop" class="hidden lg:block p-2 rounded-lg text-gray-500"
        :class="{ 'rotate-180': !sidebarStore.isDesktopOpen }">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>
      </button>

      <!-- Mobile toggle -->
      <button @click="sidebarStore.toggleMobile" class="lg:hidden p-2 rounded-lg text-gray-500">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Navigasi -->
    <nav class="flex-1 px-2 py-4 overflow-y-auto space-y-1">
      <template v-for="item in sortedMenuItems" :key="item.id">
        <div v-if="item.children?.length" class="space-y-1">
          <button @click="toggleDropdown(item.id)" class="sidebar-link w-full flex justify-between items-center">
            <div class="flex items-center gap-2">
              <img v-if="item.icon" :src="item.icon" class="w-5 h-5" alt="" />
              <span v-if="sidebarStore.isDesktopOpen">{{ item.title }}</span>
            </div>
            <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': openDropdowns[item.id] }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="openDropdowns[item.id]" class="ml-4 mt-1 space-y-1">
            <NuxtLink v-for="child in item.children" :key="child.id" :to="child.slug" class="sidebar-link">
              {{ child.title }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink v-else :to="item.slug" class="sidebar-link"
          :class="{ 'justify-center': !sidebarStore.isDesktopOpen }">
          <img v-if="item.icon" :src="item.icon" class="w-5 h-5" alt="" />
          <span v-if="sidebarStore.isDesktopOpen">{{ item.title }}</span>
        </NuxtLink>
      </template>
    </nav>
    <div class="p-4 border-t border-gray-200 dark:border-gray-800" v-if="sidebarStore.isDesktopOpen">
      <div class="bg-primary-50 dark:bg-gray-800 rounded-xl p-4">
        <div class="flex items-center mb-3">
          <div class="text-primary-500 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="ml-2 text-sm font-semibold text-primary-800 dark:text-primary-300">Need help?</h4>
        </div>
        <p class="text-xs text-primary-700 dark:text-primary-400 mb-3">Let us help you find the right solutions.</p>
        <button
          class="w-full px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-lg border border-primary-200 dark:border-gray-600 hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useMenuStore, useSidebarStore } from '@/stores'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuStore = useMenuStore()
const sidebarStore = useSidebarStore()
const route = useRoute()

const sortedMenuItems = computed(() => menuStore.sortedMenuItems)
const openDropdowns = ref({})
const toggleDropdown = (id) => {
  openDropdowns.value[id] = !openDropdowns.value[id]
}

const isMobile = ref(false)
onMounted(() => {
  const check = () => {
    isMobile.value = window.innerWidth < 1024
  }
  check()
  window.addEventListener('resize', check)
})

watch(() => route.fullPath, () => {
  sidebarStore.closeMobile()
})
</script>

<style scoped>
.sidebar-link {
  @apply flex items-center gap-2 text-sm py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800;
  white-space: nowrap;
}

.sidebar-link.router-link-exact-active {
  @apply bg-gray-100 text-primary-600 dark:bg-gray-800 dark:text-white;
}
</style>
