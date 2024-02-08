<template>
  <div class="w-screen min-h-screen">

    <section class="flex">
      <dashboard-sidebar></dashboard-sidebar>
      <dashboard-header>
        <main class="flex items-center max-w-[1440px] container p-5 overflow-auto mx-auto leading-6">
          <NuxtPage />
        </main>
      </dashboard-header>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>
