<script setup lang="ts">
defineProps<{
  label?: string
  primary?: boolean
}>()
</script>

<template>
  <button role="button" :class="['custom-button', { primary }]">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.custom-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  font-size: 1rem;
}
.custom-button.primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
