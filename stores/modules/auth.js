import { defineStore } from 'pinia'
import { useNuxtApp, useCookie } from '#app'
import { useProfileStore } from '@/stores'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        token: null,
        tokenExpiry: null,
        user: null,
        isLoading: false
    }),

    actions: {
        initialize() {
            const token = useCookie('authToken').value
            const expiry = useCookie('authExpiry').value
            const user = useCookie('profile').value
            const isAuthenticated = useCookie('isAuthenticated').value === 'true'

            this.token = token
            this.tokenExpiry = expiry
            this.user = user ? JSON.parse(user) : null
            this.isAuthenticated = isAuthenticated
        },

        async login(email, password) {
            const { $api, $router, $toast } = useNuxtApp()
            const profileStore = useProfileStore()

            this.isLoading = true

            try {
                const res = await $api.post('/auth/login', { email, password })
                const token = res.data.data.access_token
                const expiresAtRaw = res.data.data.expires_at
                const expiresAt = new Date(expiresAtRaw).toISOString() 

                const secure = process.env.NODE_ENV === 'production'

                useCookie('authToken', { path: '/', secure, sameSite: 'lax' }).value = token
                useCookie('authExpiry', { path: '/', secure, sameSite: 'lax' }).value = expiresAt
                useCookie('isAuthenticated', { path: '/', secure, sameSite: 'lax' }).value = 'true'

                this.token = token
                this.tokenExpiry = expiresAt
                this.isAuthenticated = true

                const success = await profileStore.fetchProfile()
                console.log(success)
                if (success) {
                    this.isLoading = false
                    $toast.success('Login berhasil')
                    await new Promise(resolve => setTimeout(resolve, 1500))

                    const profile = profileStore.getProfile
                    useCookie('profile', { path: '/', secure, sameSite: 'lax' }).value = JSON.stringify(profile)
                    this.user = profile

                    $router.push('/')
                } else {
                    $toast.error('Login berhasil, tapi gagal ambil profil')
                }
            } catch (error) {
                console.error('Login error:', error)
                useCookie('isAuthenticated', { path: '/' }).value = 'false'
                this.isAuthenticated = false
                $toast.error(error.response?.data?.message || 'Login gagal')
                this.isLoading = false
            }
        },


        async logout() {
            const { $router, $toast } = useNuxtApp()

            $toast.success('Logout berhasil')

            setTimeout(() => {
                this.token = null
                this.tokenExpiry = null
                this.isAuthenticated = false
                this.user = null

                useCookie('authToken', { path: '/' }).value = null
                useCookie('authExpiry', { path: '/' }).value = null
                useCookie('profile', { path: '/' }).value = null
                useCookie('isAuthenticated', { path: '/' }).value = 'false'

                const profileStore = useProfileStore()
                profileStore.clearProfile()
                $router.push('/auth/login')

            }, 1500)

        }

    },

    getters: {
        isLoggedIn: (state) => state.isAuthenticated,
        getLoading: (state) => state.isLoading
    }
})