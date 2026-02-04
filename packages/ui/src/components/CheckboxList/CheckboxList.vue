<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

defineProps<{
  options: { label: string; value: string | number }[]
}>()

const model = defineModel<string[] | number[]>()
</script>

<template>
  <div class="checkbox-list">
    <div v-for="option in options" :key="option.value" class="checkbox-item">
      <Checkbox v-model="model" :inputId="String(option.value)" :value="option.value" />
      <label :for="String(option.value)">{{ option.label }}</label>
    </div>
  </div>
</template>

<style scoped>
.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
