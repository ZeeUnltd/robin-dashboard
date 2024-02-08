<template>
  <div>
    loading...
  </div>
</template>

<script lang="ts" setup>
const $router = useRouter()

onMounted(() => $router.push('/get-started')) 
    
</script>
