<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <!-- Logo and Header -->
            <div class="text-center">
                <div class="flex justify-center">
                    <div class="flex justify-center">
                        <img src="/images/floothink-logo-dark.webp" class="w-40" alt="">
                    </div>
                </div>
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Create your account
                </h2>
                <p class="mt-2 text-sm text-gray-600">
                    Join us today! Please fill in your details.
                </p>
            </div>

            <!-- Register Form -->
            <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
                <div class="space-y-4">
                    <!-- Full Name Field -->
                    <div>
                        <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input id="fullName" name="fullName" type="text" autocomplete="name" required
                            v-model="form.fullName"
                            class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:z-10 sm:text-sm"
                            placeholder="Enter your full name" />
                    </div>

                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <input id="email" name="email" type="email" autocomplete="email" required v-model="form.email"
                            class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:z-10 sm:text-sm"
                            placeholder="Enter your email" />
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                                autocomplete="new-password" required v-model="form.password"
                                class="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:z-10 sm:text-sm"
                                placeholder="Create a password" />
                            <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center"
                                @click="showPassword = !showPassword">
                                <svg v-if="!showPassword" class="h-5 w-5 text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <svg v-else class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Confirm Password Field -->
                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password"
                            required v-model="form.confirmPassword"
                            class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:z-10 sm:text-sm"
                            placeholder="Confirm your password" />
                    </div>
                </div>

                <!-- Terms and Conditions -->
                <div class="flex items-center">
                    <input id="terms" name="terms" type="checkbox" required v-model="form.acceptTerms"
                        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                    <label for="terms" class="ml-2 block text-sm text-gray-700">
                        I agree to the
                        <a href="#" class="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                            Terms and Conditions
                        </a>
                        and
                        <a href="#" class="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                            Privacy Policy
                        </a>
                    </label>
                </div>

                <!-- Submit Button -->
                <div>
                    <button type="submit" :disabled="isLoading"
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
                        {{ isLoading ? 'Creating account...' : 'Create account' }}
                    </button>
                </div>

                <!-- Divider -->
                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <!-- Social Login Buttons -->
                    <div class="mt-6 grid grid-cols-1 gap-3">
                        <button type="button"
                            class="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                <path fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                                </path>
                                <path fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                </path>
                                <path fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                </path>
                                <path fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                </path>
                            </svg>
                            <span class="ml-2">Google</span>
                        </button>
                    </div>
                </div>

                <!-- Sign in link -->
                <div class="text-center">
                    <p class="text-sm text-gray-600">
                        Already have an account?
                        <NuxtLink to="/auth/login"
                            class="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                            Sign in here
                        </NuxtLink>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false
})

const form = ref({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
})

const showPassword = ref(false)
const isLoading = ref(false)

const handleRegister = async () => {
    if (form.value.password !== form.value.confirmPassword) {
        alert('Passwords do not match')
        return
    }

    isLoading.value = true

    try {
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log('Register attempt:', form.value)

        await navigateTo('/')
    } catch (error) {
        console.error('Registration error:', error)
    } finally {
        isLoading.value = false
    }
}

</script>