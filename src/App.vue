<script setup lang="ts">
import { RouterView } from 'vue-router';
import WebsiteHeader from '@/components/WebsiteHeader.vue';
</script>

<template>
  <WebsiteHeader />

  <Suspense>
    <main>
      <RouterView />
    </main>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>