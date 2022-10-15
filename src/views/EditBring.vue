<template>
  <div class="card card-body mt-4">
    <h3>Modifier ce que j'apporte</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Nom</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Produit</label>
        <input v-model="form.object" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBring, updateBring } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const objectId = computed(() => route.params.id)
    const form = reactive({ name: '', available: '' })
    onMounted(async () => {
      const bring = await getBring(objectId.value)
      form.name = bring.name
      form.object = bring.object
    })

    const update = async () => {
      await updateBring(objectId.value, { ...form })
        router.push('/bring')
        form.name = ''
        form.object = ''
      }

    return { form, update }
  }
}
</script>
