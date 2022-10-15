<template>
    <div class="card card-body mt-4">
      <h2>Disponible ou pas ? 😗</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Nom</label>
          <input v-model="form.name" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label>Ce que j'apporte</label>
          <input v-model="form.object" class="form-control" required />
        </div>
  
        <button type="submit" class="btn btn-success mt-3">
          Ajouter
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { createBring } from '@/firebase'
  import { reactive } from 'vue'
  
  export default {
    setup() {
      const form = reactive({ name: '', object: '' })
  
      const onSubmit = async () => {
        await createBring({ ...form })
        form.name = ''
        form.object = ''
      }
  
      return { form, onSubmit }
    }
  }
  </script>
  