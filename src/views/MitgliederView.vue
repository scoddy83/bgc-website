<script setup lang="ts">
import { client } from '../Client'


const query = `*[_type == "mitglied"] {
  vorname,
  name,
}[0...10]`;

const mitglieder = await client.fetch(query);

</script>

<template>
  <h1>Mitglieder</h1>
  <p>Die Mitglieder der BGC</p>
  <div>
    <ul>
      <li v-for="mitglied in mitglieder" :key="mitglied._id">
        {{ mitglied.vorname }} {{ mitglied.name }}
      </li>
    </ul>
  </div>
</template>
