<template>
  <div
    class="block px-20 py-6 max-w-sm bg-gradient-to-r from-[#9FBACD] to-[#F2C144] rounded-lg border border-gray-200 shadow-md mb-10"
  >
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-slate-100">
      Alors chaud π ?
    </h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input
          v-model="form.name"
          class="form-control"
          required
          placeholder="Rentre ton nom"
        />
      </div>
      <div class="form-group mt-3">
        <label class="font-normal text-slate-100">Disponible</label>
        <div class="flex">
          <input type="checkbox" id="checkbox" v-model="form.available" />
          <p class="ml-2 text-slate-100">Let's go πΎππ»π»π</p>
        </div>
        <div class="flex">
          <input type="checkbox" v-model="form.notAvailable" />
          <p class="ml-2 text-slate-100">Non π</p>
        </div>
      </div>

      <button
        type="submit"
        class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
      >
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
    const form = reactive({ name: '', available: false, notAvailable: false })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.available = ''
      form.notAvailable = ''
    }

    return { form, onSubmit }
  }
}
</script>
