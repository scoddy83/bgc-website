<script lang="ts">
import { useSanityFetcher } from 'vue-sanity'

export default {
  setup() {
    const { data: name } = useSanityFetcher('*[_type == "mitglied"][0].name');
    return { name };
  }
}
</script>

<template>
  <main>
    <h1>Mitglieder</h1>
    <p>Die Mitglieder der BGC</p>
  </main>
  <div>{{ name }}</div>
</template>
