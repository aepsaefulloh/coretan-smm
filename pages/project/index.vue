<template>
  <div class="flex flex-col space-y-8">
    <Filter @funSearch="funSearch" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id">
        <CardProject :project="project" @delete="deleteProject" />
      </div>
    </div>

    <EmptyData v-if="projects.length === 0" title="No Project yet"
      description="Get started by creating your first project." to="/project/create" />
  </div>
</template>

<script setup>

import Filter from '@/components/project/Filter.vue';
import EmptyData from '@/components/ui/EmptyData.vue';
import CardProject from '@/components/ui/card/Project.vue';
import { useProjectStore } from '@/stores'

const projectStore = useProjectStore();
const searchTask = ref('')

const projects = ref(projectStore.getProject);

const deleteProject = (id) => {
  console.log('Delete project:', id)
  projectStore.delete(id)
}

const funSearch = (value) => {
  searchTask.value = value
  console.log('Search task:', searchTask.value)
}

</script>

<style scoped></style>