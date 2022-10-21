<template>
  <section class="flex justify-center mt-10">
    <div class="block px-20 py-6 max-w-sm bg-gradient-to-r from-[#9FBACD] to-[#F2C144] rounded-lg border border-gray-200 shadow-md mb-10">
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-slate-100">Tu veux apporter quelque chose ?</h2>
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col justify-center">
          <input v-model="form.name" class="my-5" required placeholder="Ton petit nom"/>
          <input v-model="form.object" class="mb-5" required placeholder="Objet"/>
          <button type="submit" class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Ajouter</button>
        </div>
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
