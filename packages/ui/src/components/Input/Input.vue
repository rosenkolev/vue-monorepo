<script setup lang="ts">
const props = defineProps<{
  /**
   * The label of the input
   */
  label?: string
  /**
   * The placeholder of the input
   */
  placeholder?: string
}>()
const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    :aria-label="props.label"
    :placeholder="props.placeholder"
    role="textbox"
    class="custom-input"
  />
</template>

<style scoped>
.custom-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
</style>
