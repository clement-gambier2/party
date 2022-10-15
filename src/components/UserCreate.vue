<template>
  <div class="card card-body mt-4">
    <h2>Disponible ou pas ? 😗</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Nom</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Disponible</label>
        <input type="checkbox" id="checkbox" v-model="form.available">
        <label for="checkbox">{{ checked }}</label>
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Ajouter
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '', available: false })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.available = ''
    }

    return { form, onSubmit }
  }
}
</script>
