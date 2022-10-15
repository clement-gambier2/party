<template>
  <div class="card card-body mt-4">
    <h3>Modifier la disponibilité</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Nom</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Disponible</label>
        <input type="checkbox" id="checkbox" v-model="form.available" />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({ name: '', available: '' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.name = user.name
      form.available = user.available
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/')
      form.name = ''
      form.available = false
    }

    return { form, update }
  }
}
</script>
