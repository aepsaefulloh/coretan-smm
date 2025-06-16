// plugins/axios.ts
import { defineNuxtPlugin, useCookie, useRuntimeConfig } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  api.interceptors.request.use((req) => {
    const token = useCookie('authToken').value
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    return req
  }, (error) => {
    return Promise.reject(error)
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const code = error.response?.status

      if (code === 401) {
        useCookie('authToken').value = null
        const router = useRouter()
        router.push('/login')
      }

      if (process.client && error.response?.data?.message) {
        const { $toast } = useNuxtApp()
        $toast.error(error.response.data.message)
      }

      return Promise.reject(error)
    }
  )

  nuxtApp.provide('api', api)
})
