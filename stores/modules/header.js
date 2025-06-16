// stores/header.js
import { defineStore } from 'pinia'
import { useSidebarStore, useAuthStore, useProfileStore } from '@/stores'

export const useHeaderStore = defineStore('header', {
    state: () => ({
        darkMode: false,
        showUserMenu: false,
        showCalendar: false
    }),
    actions: {
        initDarkMode() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.darkMode = true
                document.documentElement.classList.add('dark')
            }
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode
            if (this.darkMode) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
        toggleUserMenu() {
            this.showUserMenu = !this.showUserMenu
        },
        toggleCalendar() {
            this.showCalendar = !this.showCalendar
        },
        toggleSidebar() {
            useSidebarStore().toggleMobile()
        },
        logout() {
            useAuthStore().logout()
        },
    },
    getters: {
        profile: () => useProfileStore().getProfile,
    },
})
