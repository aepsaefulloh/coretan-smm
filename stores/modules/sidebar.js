// stores/sidebar.js
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isDesktopOpen: true,
        isMobileOpen: false
    }),
    actions: {
        toggleDesktop() {
            this.isDesktopOpen = !this.isDesktopOpen
        },
        toggleMobile() {
            this.isMobileOpen = !this.isMobileOpen
        },
        closeMobile() {
            this.isMobileOpen = false
        },
        openMobile() {
            this.isMobileOpen = true
        }
    }
})
