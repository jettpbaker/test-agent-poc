<script setup lang="ts">
import { ref, computed } from 'vue'

interface Task {
  id: number
  text: string
  completed: boolean
}

const newTask = ref('')
const tasks = ref<Task[]>([])
let nextId = 1

const taskCount = computed(() => tasks.value.length)

function addTask() {
  const text = newTask.value.trim()
  if (!text) return
  tasks.value.push({ id: nextId++, text, completed: false })
  newTask.value = ''
}

function toggleTask(id: number) {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.completed = !task.completed
}

function deleteTask(id: number) {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}
</script>

<template>
  <div class="task-list">
    <h2>Tasks</h2>
    <div class="task-input-row">
      <input
        v-model="newTask"
        data-testid="task-input-broken"
        placeholder="New task..."
        @keyup.enter="addTask"
      />
      <button class="add-task-btn" data-testid="add-task" @click="addTask">Add</button>
    </div>
    <p data-testid="task-count">{{ taskCount }} task{{ taskCount === 1 ? '' : 's' }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id" data-testid="task-item">
        <span class="task-text" :class="{ completed: task.completed }">{{ task.text }}</span>
        <button data-testid="toggle-task" @click="toggleTask(task.id)">
          {{ task.completed ? 'Undo' : 'Done' }}
        </button>
        <button class="delete-btn" data-testid="delete-task" @click="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-list {
  flex: 1;
  padding: 1rem;
}
.task-input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.task-input-row input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.add-task-btn {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-task-btn:hover {
  background: #38a373;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0;
}
.task-text {
  flex: 1;
}
.task-text.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
.delete-btn {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
button {
  cursor: pointer;
}
</style>
