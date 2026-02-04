<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" role="textbox" class="custom-input" />
</template>

<style scoped>
.custom-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
</style>
