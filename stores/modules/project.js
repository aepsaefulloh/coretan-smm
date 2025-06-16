// stores/project.js
import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [
            {
                id: 1,
                name: 'Website Redesign',
                client: 'TechCorp Inc.',
                description: 'Complete redesign of the company website with modern UI/UX principles and responsive design.',
                status: 'Active',
                progress: 75,
                tasks: 24,
                dueDate: 'Mar 15, 2025',
                color: 'bg-blue-500',
                progressColor: 'bg-blue-500',
                team: [
                    'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
                ]
            },
            {
                id: 2,
                name: 'Mobile Application',
                client: 'StartupXYZ',
                description: 'Native mobile app development for iOS and Android with real-time features and cloud integration.',
                status: 'Active',
                progress: 45,
                tasks: 18,
                dueDate: 'Apr 20, 2025',
                color: 'bg-green-500',
                progressColor: 'bg-green-500',
                team: [
                    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
                ]
            },
            {
                id: 3,
                name: 'Marketing Campaign',
                client: 'Fashion Brand',
                description: 'Comprehensive digital marketing campaign including social media, content creation, and advertising.',
                status: 'Completed',
                progress: 100,
                tasks: 12,
                dueDate: 'Feb 28, 2025',
                color: 'bg-purple-500',
                progressColor: 'bg-green-500',
                team: [
                    'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
                ]
            },
            {
                id: 4,
                name: 'API Development',
                client: 'FinTech Solutions',
                description: 'RESTful API development with authentication, payment processing, and third-party integrations.',
                status: 'Due Date',
                progress: 30,
                tasks: 15,
                dueDate: 'May 10, 2025',
                color: 'bg-yellow-500',
                progressColor: 'bg-yellow-500',
                team: [
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
                ]
            },
            {
                id: 5,
                name: 'E-commerce Platform',
                client: 'Retail Company',
                description: 'Full-featured e-commerce platform with inventory management, payment gateway, and analytics.',
                status: 'Pending',
                progress: 20,
                tasks: 32,
                dueDate: 'Jun 30, 2025',
                color: 'bg-red-500',
                progressColor: 'bg-red-500',
                team: [
                    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
                ]
            },
            {
                id: 6,
                name: 'Data Analytics Dashboard',
                client: 'Analytics Corp',
                description: 'Interactive dashboard for data visualization with real-time charts, filters, and export capabilities.',
                status: 'Doing',
                progress: 60,
                tasks: 20,
                dueDate: 'Apr 5, 2025',
                color: 'bg-indigo-500',
                progressColor: 'bg-indigo-500',
                team: [
                    'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces',
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=faces'
                ]
            }
        ],
        isLoadingCreate: false,
        isLoadingUpdate: false,
        isLoadingDraft: false,
    }),
    actions: {
        async submit() {
            const { $toast } = useNuxtApp()
            this.isLoadingCreate = true
            try {
                await new Promise(resolve => setTimeout(resolve, 2000))
                $toast.success('Project created successfully!')
            } catch (error) {
                console.error('Error creating project:', error)
            } finally {
                this.isLoadingCreate = false
            }
        },
        async update() {
            const { $toast } = useNuxtApp()
            this.isLoadingUpdate = true
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                $toast.success('Project updated successfully!')
                this.isLoadingUpdate = false
            } catch (error) {
                console.error('Error updating project:', error)
            } finally {
                this.isLoadingUpdate = false
            }
        },
        async draft() {
            const { $toast } = useNuxtApp()
            this.isLoadingDraft = true
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                $toast.success('Project draft successfully!')
                this.isLoadingDraft = false
            } catch (error) {
                console.error('Error saving draft:', error)
            } finally {
                this.isLoadingDraft = false
            }
        },
        async delete() {
            const { $toast } = useNuxtApp()
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                $toast.success('Project berhasil dihapus')
            } catch (error) {
                console.error('Error deleting project:', error)
                $toast.error('Gagal menghapus project')
            }
        }


    },
    getters: {
        getProject: (state) => state.projects,
        isAnyLoading: (state) => state.isLoadingCreate || state.isLoadingUpdate || state.isLoadingDraft,
    },
})
