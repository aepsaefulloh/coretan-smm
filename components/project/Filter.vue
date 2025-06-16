<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input type="text" placeholder="Search..." v-model="searchText" @input="search"
                    class="block w-full pl-10 pr-3 py-2 border-0 rounded-[12px] dark:bg-gray-700  dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">

            </div>
            <select
                class="border-0 rounded-full w-[200px] px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Status</option>
                <option>Active</option>
                <option>Completed</option>
                <option>On Hold</option>
            </select>

            <select
                class="border-0 rounded-full w-[200px] px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Teams</option>
                <option>Design Team</option>
                <option>Development Team</option>
                <option>Marketing Team</option>
            </select>
        </div>
        <div class="flex items-center space-x-2 text-sm text-gray-600">
            <NuxtLink to="/project/create" class="btn btn-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd" />
                </svg>
                Create Project
            </NuxtLink>
        </div>
    </div>
    <div class="my-6"><span class="font-bold">Result :</span> 333 Project</div>

</template>

<script setup>
const emit = defineEmits(['funSearch'])

const searchText = ref('')

const search = () => {
    emit('funSearch', searchText.value)
}
</script>

<style lang="scss" scoped></style>