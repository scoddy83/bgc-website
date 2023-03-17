<script setup lang="ts">
import { RouterView } from 'vue-router'
import WebsiteHeader from '@/components/WebsiteHeader.vue'
import MitgliederView from './views/MitgliederView.vue';
</script>

<template>
  <WebsiteHeader />>
  <RouterView />
  <MitgliederView />
</template>