<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, CheckboxList } from '@repo/ui'

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  const element = document.querySelector('html')
  if (isDark.value) {
    element?.classList.add('dark-mode')
  } else {
    element?.classList.remove('dark-mode')
  }
}

const inputValue = ref('')
const checkboxValue = ref([])
const checkboxOptions = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
]
</script>

<template>
  <div class="container">
    <header>
      <h1>Portal</h1>
      <Button @click="toggleTheme" :label="isDark ? 'Switch to Light' : 'Switch to Dark'" />
    </header>
    <main>
      <section>
        <h2>Input</h2>
        <Input v-model="inputValue" />
        <p>Value: {{ inputValue }}</p>
      </section>
      <section>
        <h2>Checkbox List</h2>
        <CheckboxList v-model="checkboxValue" :options="checkboxOptions" />
        <p>Selected: {{ checkboxValue }}</p>
      </section>
      <section>
        <h2>Buttons</h2>
        <Button label="Standard Button" />
        <Button label="Primary Button" primary />
      </section>
    </main>
  </div>
</template>

<style>
.container {
  padding: 2rem;
  font-family: sans-serif;
  transition:
    background-color 0.3s,
    color 0.3s;
  background-color: white;
  color: #333;
  min-height: 100vh;
}
.dark-mode body {
  background-color: #1a1a1a;
  color: #ffffff;
}
.dark-mode .container {
  background-color: #1a1a1a;
  color: #ffffff;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.dark-mode section {
  border-color: #444;
}
</style>
