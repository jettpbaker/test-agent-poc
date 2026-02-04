<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)
const error = ref('')

function handleSubmit() {
  error.value = ''
  submitted.value = false

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    error.value = 'All fields are required.'
    return
  }

  submitted.value = true
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div class="feedback-form">
    <h2>Feedback</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" class="name-input" placeholder="Your name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" class="email-input" placeholder="you@example.com" />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea v-model="message" class="message-input" placeholder="Your feedback"></textarea>
      </div>
      <button type="submit" class="submit-btn" data-testid="submit-button">Submit</button>
    </form>
    <p v-if="submitted" class="success-msg" data-testid="success-msg">
      Thank you for your feedback!
    </p>
    <p v-if="error" class="error-msg" data-testid="error-message">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.feedback-form {
  flex: 1;
  padding: 1rem;
}
.form-group {
  margin-bottom: 0.75rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.form-group textarea {
  min-height: 80px;
  resize: vertical;
}
.submit-btn {
  padding: 0.5rem 1.25rem;
  background: #42b883;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.submit-btn:hover {
  background: #38a373;
}
.success-msg {
  color: #42b883;
  margin-top: 0.75rem;
}
.error-msg {
  color: #e74c3c;
  margin-top: 0.75rem;
}
</style>
