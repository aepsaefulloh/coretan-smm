<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <!-- Logo and Header -->
            <div class="text-center">
                <div class="flex justify-center">
                    <img src="/images/floothink-logo-dark.webp" class="w-40" alt="">
                </div>
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Forgot Password
                </h2>
                <p class="mt-2 text-sm text-gray-600">
                    Enter your email address to receive a password reset link.
                </p>
            </div>

            <!-- Login Form -->
            <form class="mt-8 space-y-6" @submit.prevent="handleForgot">
                <div class="space-y-4">
                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <input id="email" name="email" type="email" autocomplete="email" required v-model="email"
                            class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:z-10 sm:text-sm"
                            placeholder="Enter your email" />
                    </div>
                </div>

                <div class="flex items-center justify-end">
                    <div class="text-sm">
                        <NuxtLink href="/auth/login" class="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                            Back to login
                        </NuxtLink>
                    </div>
                </div>

                <div>
                    <button type="submit" :disabled="isLoading || !email || !password"
                        class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                        <span v-if="isLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </span>
                        {{ isLoading ? 'Sending email...' : 'Forgot Password' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores'

definePageMeta({
    layout: false,
})
const auth = useAuthStore()


const email = ref('')
const password = ref('')
const error = ref('')
const showPassword = ref(false)

const isLoading = computed(() => auth.getLoading)

const handleForgot = async () => {
    try {
        await auth.login(email.value, password.value);
    } catch (error) {
        console.error(error);
    }
};

</script>