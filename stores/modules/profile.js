import { defineStore } from 'pinia'
import { useNuxtApp, useCookie } from '#app'
import { useAuthStore } from '@/stores'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null
  }),

  actions: {
    async fetchProfile() {
      const { $api, $toast } = useNuxtApp()

      try {
        const response = await $api.get('/auth/profile')
        const profileData = response.data.data

        this.profile = profileData
        useCookie('profile', { path: '/', secure: true, sameSite: 'strict' }).value = JSON.stringify(profileData)

        const auth = useAuthStore()
        auth.user = profileData

        return true
      } catch (error) {
        console.error('[Profile Error]', error)
        $toast.error('Gagal mengambil data profil')
        return false
      }
    },
    initializeProfile() {
      const profileCookie = useCookie('profile');
      this.profile = profileCookie.value || null;
    },
    clearProfile() {
      this.profile = null
      useCookie('profile', { path: '/' }).value = null
    }
  },

  getters: {
    getProfile: (state) => state.profile
  }
})