<script setup lang="ts">
defineProps<{
  /**
   * The label of the button.
   */
  label?: string
  /**
   * Whether the button is primary.
   */
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
  color: #000;
}
.custom-button.primary {
  background-color: #004b8f;
  color: white;
  border-color: #002b5f;
}
</style>
