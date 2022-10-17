<template>
  <section class="flex justify-center">
    <div class="block px-20 py-6 max-w-sm bg-red-500 rounded-lg border border-gray-200 shadow-md mb-10">
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ce que j'apporte</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <h2>Met ce que t'ammènes</h2>
          <input v-model="form.name" class="form-control" required placeholder="objet"/>
          <input v-model="form.object" class="form-control" required placeholder="Villageoise"/>
        </div>
        <button type="submit" class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Ajouter</button>
      </form>
    </div>
  </section>
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
