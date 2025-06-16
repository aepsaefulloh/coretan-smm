// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        members: [
            {
                id: 1,
                name: 'Sarah Johnson',
                role: 'UI/UX Designer',
                avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
            },
            {
                id: 2,
                name: 'Mike Chen',
                role: 'Frontend Developer',
                avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
            },
            {
                id: 3,
                name: 'Emily Davis',
                role: 'Project Manager',
                avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=faces'
            },
        ],
    }),
    actions: {

    },
    getters: {
        getMembers: (state) => state.members
    },
})
