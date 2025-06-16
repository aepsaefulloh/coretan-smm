<template>
    <div>
        helo {{  $route.params.id }}
        <pre>{{ route }}</pre>
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style lang="scss" scoped>

</style>