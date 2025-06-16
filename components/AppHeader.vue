<template>
  <header
    class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-4 lg:px-6">
    <div class="flex lg:hidden">
      <button @click="headerStore.toggleSidebar"
        class="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
    </div>

    <div class="relative flex-grow max-w-md mx-auto lg:mx-0">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ pageTitle }}</h1>
    </div>

    <div class="flex items-center space-x-4">
      <button @click="headerStore.toggleCalendar"
        class="p-1 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
          viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
        </svg>
      </button>
      <button @click="headerStore.toggleDarkMode"
        class="p-1 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none">
        <svg v-if="headerStore.darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>

      <button
        class="p-1 relative rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <div class="relative">
        <button @click="headerStore.toggleUserMenu" class="flex items-center">
          <img :src="headerStore.profile?.photo" alt="Julia"
            class="h-8 w-8 rounded-full object-cover border-2 border-white dark:border-gray-700">
          <div class="ml-2 hidden md:block">
            <div class="text-sm font-medium text-gray-900 dark:text-white"> {{ headerStore.profile?.full_name }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ headerStore.profile?.full_name }}</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 text-gray-400" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </button>

        <div v-if="headerStore.showUserMenu"
          class="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Your
            Profile</a>
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
          <div class="border-t border-gray-200 dark:border-gray-700"></div>
          <a href="#" @click="headerStore.logout"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Sign
            out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useHeaderStore, useProfileStore } from '@/stores'
import { useRoute } from 'vue-router'

const headerStore = useHeaderStore()
const profileStore = useProfileStore()
const route = useRoute()

const pageTitle = computed(() => {
  const id = route.params.id
  console.log('title', route)
  if (route.name === 'task-id' && id) {
    return `Task #${id}`
  }
  return route.meta?.title ||
    route.name?.toString().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ||
    'Untitled'
})

onMounted(() => {
  headerStore.initDarkMode()
  profileStore.initializeProfile()
})
</script>
