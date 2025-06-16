import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menuItems: [
            {
                id: 1,
                title: "Dashboard",
                level: 1,
                slug: "/",
                icon: '/images/menu/task.svg',
                sort_priority: 1,
                parent_id: null,
                children: null,
            },
            {
                id: 2,
                title: "Projects",
                level: 1,
                slug: "/project",
                icon: '/images/menu/task.svg',
                sort_priority: 2,
                parent_id: null,
                children: null,
            },
            {
                id: 3,
                title: "Tasks",
                level: 1,
                slug: "/task",
                icon: '/images/menu/task.svg',
                sort_priority: 3,
                parent_id: null,
                children: null,
            },
            {
                id: 4,
                title: "Settings",
                level: 1,
                slug: "/setting",
                icon: '/images/menu/task.svg',
                sort_priority: 4,
                parent_id: null,
                children: null,
            },
            // {
            //     id: 2,
            //     title: "About",
            //     level: 1,
            //     sort_priority: 2,
            //     icon: '/images/menu/task.svg',
            //     parent_id: null,
            //     children: [
            //         {
            //             id: 21,
            //             title: "Item 1",
            //             slug: "/about/item-1",
            //             level: 2,
            //             sort_priority: 1,
            //             parent_id: 2,
            //         },
            //     ],
            // },



        ],
    }),
    actions: {

    },
    getters: {
        sortedMenuItems: (state) => {
            return [...state.menuItems].sort((a, b) => a.sort_priority - b.sort_priority);
        },

        menuItemsByGroup: (state) => {
            return (group) => state.menuItems.filter(item => item.parent_group === group);
        },
        getChildrenById: (state) => {
            return (id) => state.menuItems.find(item => item.id === id)?.children || [];
        },
        getChildrenRecursive: (state) => {
            console.log(state.menuItems);
            const findChildren = (id, level = 1, maxLevel = 3) => {
                if (level > maxLevel) return [];

                const item = state.menuItems.find(item => item.id === id);
                if (!item || !item.children) return [];

                return item.children.flatMap(child => [
                    child,
                    ...findChildren(child.id, level + 1, maxLevel)
                ]);
            };

            return (id) => findChildren(id);
        }

    },

});
