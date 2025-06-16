<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

        <!-- Modal -->
        <div class="flex min-h-full items-center justify-center p-4">
            <div class="relative bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
                <!-- Header -->
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-4">
                        <!-- Copy Link -->
                        <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span class="text-sm">Copy Link</span>
                        </button>

                        <!-- Edit -->
                        <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span class="text-sm">Edit</span>
                        </button>

                        <!-- Delete -->
                        <button class="flex items-center space-x-2 text-gray-500 hover:text-red-600">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span class="text-sm">Delete</span>
                        </button>
                    </div>

                    <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Content -->
                <div class="flex h-[calc(90vh-80px)]">
                    <!-- Left Panel - Task Details -->
                    <div class="w-1/3 p-6 border-r border-gray-200 overflow-y-auto">
                        <!-- Breadcrumb -->
                        <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                            <span>First Item</span>
                            <span>/</span>
                            <span>Second Item</span>
                            <span>/</span>
                            <span class="text-gray-900">Third Item</span>
                        </div>

                        <!-- Task Title -->
                        <div class="mb-6">
                            <div class="flex items-center space-x-2 mb-2">
                                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <h1 class="text-lg font-semibold text-gray-900">{{ task.title }}</h1>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span
                                    class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium">SMM</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">Design</span>
                            </div>
                        </div>

                        <!-- Task Details -->
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                <p class="text-sm text-gray-900">{{ task.start_date }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                                <p class="text-sm text-gray-900">{{ task.due_date }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <span :class="statusColors(task.status)"
                                    class="px-2 py-1 rounded-full text-xs font-medium">
                                    {{ task.status }}
                                </span>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Assign to</label>
                                <div class="flex -space-x-2">
                                    <img v-for="(assignee, index) in task.assignees" :key="index"
                                        :src="assignee?.avatar" :alt="`Assignee ${index + 1}`"
                                        class="w-6 h-6 rounded-full border-2 border-white">
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Created by</label>
                                <div class="flex items-center space-x-2">
                                    <img :src="task.creator" alt="Creator" class="w-6 h-6 rounded-full">
                                </div>
                            </div>
                        </div>

                        <!-- Task Overview -->
                        <div class="mt-8">
                            <h3 class="text-sm font-semibold text-gray-900 mb-3">Task Overview</h3>
                            <p class="text-sm text-gray-600 leading-relaxed">{{ task.description }}</p>
                        </div>

                        <!-- Sub Tasks -->
                        <div class="mt-8">
                            <h3 class="text-sm font-semibold text-gray-900 mb-3">Sub Task</h3>
                            <div class="space-y-3">
                                <div v-for="subtask in task.subtasks" :key="subtask.id"
                                    class="flex items-center justify-between">
                                    <span class="text-sm text-gray-900">{{ subtask.title }}</span>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xs text-gray-500">Assign to</span>
                                        <img :src="subtask.assignee" alt="Assignee" class="w-5 h-5 rounded-full">
                                    </div>
                                </div>
                            </div>
                            <button
                                class="mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium hover:bg-blue-200 transition-colors">
                                Create Subtask
                            </button>
                        </div>
                    </div>

                    <!-- Right Panel - Image and Comments -->
                    <div class="flex-1 flex flex-col">
                        <!-- Image Section -->
                        <div class="relative flex-1 bg-gray-50 overflow-hidden">
                            <img :src="task.images" alt="Task Image"
                                class="w-full h-full object-contain cursor-crosshair" @click="addImageTag"
                                ref="taskImage">

                            <!-- Image Tags -->
                            <div v-for="tag in imageTags" :key="tag.id"
                                class="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-x-2 -translate-y-2"
                                :style="{ left: tag.x + 'px', top: tag.y + 'px' }" @click.stop="selectTag(tag)">
                                <div class="absolute top-5 left-0 bg-white rounded-lg shadow-lg p-2 min-w-48 z-10"
                                    v-if="selectedTag?.id === tag.id" @click.stop>
                                    <div class="flex items-center space-x-2 mb-2">
                                        <img :src="tag.user.avatar" :alt="tag.user.name" class="w-6 h-6 rounded-full">
                                        <span class="text-sm font-medium">{{ tag.user.name }}</span>
                                        <span class="text-xs text-gray-500">{{ tag.timestamp }}</span>
                                    </div>
                                    <p class="text-sm text-gray-700">{{ tag.comment }}</p>
                                </div>
                            </div>

                            <!-- More Info Button -->
                            <button
                                class="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                                More Info
                            </button>
                        </div>

                        <!-- Comments Section -->
                        <div class="h-80 border-t border-gray-200 flex flex-col">
                            <!-- Activity Header -->
                            <div class="flex items-center justify-between p-4 border-b border-gray-200">
                                <h3 class="font-semibold text-gray-900">Activity Task</h3>
                                <button class="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                                    </svg>
                                    <span class="text-sm">Filter</span>
                                </button>
                            </div>

                            <!-- Comments List -->
                            <div class="flex-1 overflow-y-auto p-4 space-y-4">
                                <div v-for="comment in comments" :key="comment.id" class="flex space-x-3">
                                    <img :src="comment.user.avatar" :alt="comment.user.name"
                                        class="w-8 h-8 rounded-full flex-shrink-0">
                                    <div class="flex-1">
                                        <div class="bg-blue-500 text-white rounded-lg p-3">
                                            <div class="flex items-center justify-between mb-1">
                                                <span class="font-medium text-sm">{{ comment.user.name }}</span>
                                                <span class="text-xs opacity-75">{{ comment.timestamp }}</span>
                                            </div>
                                            <p class="text-sm">{{ comment.message }}</p>
                                            <button class="text-xs opacity-75 hover:opacity-100 mt-2">View
                                                comment</button>
                                        </div>
                                        <button class="text-xs text-gray-500 hover:text-gray-700 mt-1 ml-3">↳
                                            Reply</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Comment Input -->
                            <div class="p-4 border-t border-gray-200">
                                <div class="flex space-x-3">
                                    <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
                                        alt="You" class="w-8 h-8 rounded-full">
                                    <div class="flex-1">
                                        <textarea v-model="newComment" placeholder="Write a comment..."
                                            class="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            rows="2"></textarea>
                                        <div class="flex items-center justify-between mt-2">
                                            <div class="flex items-center space-x-2">
                                                <button class="p-1 text-gray-400 hover:text-gray-600">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 00-2.828-2.828z" />
                                                    </svg>
                                                </button>
                                                <button class="p-1 text-gray-400 hover:text-gray-600">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button @click="addComment"
                                                class="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tag Comment Modal - Higher z-index to appear above main modal -->
        <div v-if="showTagModal" class="fixed inset-0 z-[60] overflow-y-auto">
            <div class="fixed inset-0 bg-black bg-opacity-50" @click="closeTagModal"></div>
            <div class="flex min-h-full items-center justify-center p-4">
                <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-[61]">
                    <h3 class="text-lg font-semibold mb-4">Add Comment Tag</h3>
                    <textarea v-model="tagComment" placeholder="Add your comment..."
                        class="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3" ref="tagCommentInput"></textarea>
                    <div class="flex justify-end space-x-3 mt-4">
                        <button @click="closeTagModal"
                            class="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Cancel
                        </button>
                        <button @click="saveTag" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Add Tag
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    task: {
        type: Object,
        required: true
    }
})
import { statusColors } from "@/utils"

const emit = defineEmits(['close'])

const newComment = ref('')
const tagComment = ref('')
const showTagModal = ref(false)
const selectedTag = ref(null)
const pendingTagPosition = ref(null)
const taskImage = ref(null)

const imageTags = ref([
    {
        id: 1,
        x: 200,
        y: 150,
        comment: "This section needs to be updated with the new branding guidelines.",
        user: {
            name: "Sarah Johnson",
            avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
        },
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        x: 400,
        y: 300,
        comment: "Consider using a different color scheme here.",
        user: {
            name: "Mike Chen",
            avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
        },
        timestamp: "1 hour ago"
    }
])

const comments = ref([
    {
        id: 1,
        user: {
            name: "Maude Hall",
            avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
        },
        message: "That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
        timestamp: "24 min"
    },
    {
        id: 2,
        user: {
            name: "Maude Hall",
            avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
        },
        message: "That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
        timestamp: "1 hour"
    }
])

const closeModal = () => {
    emit('close')
}

const addComment = () => {
    if (newComment.value.trim()) {
        comments.value.push({
            id: Date.now(),
            user: {
                name: "You",
                avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
            },
            message: newComment.value,
            timestamp: "now"
        })
        newComment.value = ''
    }
}

const addImageTag = (event) => {
    const rect = taskImage.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    pendingTagPosition.value = { x, y }
    showTagModal.value = true
}

const selectTag = (tag) => {
    selectedTag.value = selectedTag.value?.id === tag.id ? null : tag
}

const closeTagModal = () => {
    showTagModal.value = false
    tagComment.value = ''
    pendingTagPosition.value = null
}

const saveTag = () => {
    if (tagComment.value.trim() && pendingTagPosition.value) {
        imageTags.value.push({
            id: Date.now(),
            x: pendingTagPosition.value.x,
            y: pendingTagPosition.value.y,
            comment: tagComment.value,
            user: {
                name: "You",
                avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces"
            },
            timestamp: "now"
        })
        closeTagModal()
    }
}

const handleClickOutside = (event) => {
    if (!event.target.closest('.absolute')) {
        selectedTag.value = null
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>