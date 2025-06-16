import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: 'Create Mockup Trisakti (Pitching Trisakti)',
                description: 'Lorem ipsum dolor sit amet consectetur. Est ut vitae sed diam pellentesque enim leo. Ornare eget odio ridiculus praesent dignissim ultrices tellus fringilla vitae. Quam semper arcu in pellentesque semper ac tempor. Bibendum neque egestas viverra amet elementum.',
                priority: 'High',
                category: 'General IT',
                start_date: '2025-05-15',
                due_date: '2025-06-01',
                progress: 0,
                status: 'Pending',
                tags: ['Design', 'SMM', 'Script Writing'],
                images: '/images/task/modal-task.jpg',
                assignees: [
                    { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                    { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                    { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }
                ]
            },
            {
                title: 'Design User Interface for Mobile App',
                description: 'Lorem ipsum dolor sit amet consectetur. Est ut vitae sed diam pellentesque enim leo. Ornare eget odio ridiculus praesent dignissim ultrices tellus fringilla vitae. Quam semper arcu in pellentesque semper ac tempor. Bibendum neque egestas viverra amet elementum.',
                priority: 'Medium',
                category: 'SMM',
                start_date: '2025-05-15',
                due_date: '2025-06-22',
                progress: 30,
                status: 'On Going',
                tags: ['Design', 'SMM'],
                images: '/images/task/modal-task.jpg',
                assignees: [
                    { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                    { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
                ]
            },
            {
                title: 'Update Marketing Materials',
                description: 'Lorem ipsum dolor sit amet consectetur. Est ut vitae sed diam pellentesque enim leo. Ornare eget odio ridiculus praesent dignissim ultrices tellus fringilla vitae. Quam semper arcu in pellentesque semper ac tempor. Bibendum neque egestas viverra amet elementum.',
                priority: 'High',
                category: 'Production',
                start_date: '2025-05-15',
                due_date: '2025-06-28',
                progress: 0,
                status: 'Completed',
                tags: ['SMM', 'Script Writing'],
                images: '/images/task/modal-task.jpg',
                assignees: [
                    { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }
                ]
            }
        ]
    }),

    actions: {

    },

    getters: {
        getTask: (state) => state.tasks
    }
})