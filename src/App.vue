<script setup lang="ts">
import FeedbackForm from './components/FeedbackForm.vue'
import TaskList from './components/TaskList.vue'
</script>

<template>
  <div class="app-container">
    <h1>Test Agent POC</h1>
    <div class="panels">
      <FeedbackForm />
      <TaskList />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  font-family: system-ui, sans-serif;
}
.panels {
  display: flex;
  gap: 2rem;
}
@media (max-width: 600px) {
  .panels {
    flex-direction: column;
  }
}
</style>
