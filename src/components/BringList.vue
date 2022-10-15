<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Disponible</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="{ id, name, object } in bring" :key="id">
          <td>{{ name }}</td>
          <td>{{ object }}</td>
          
          <td>
            <router-link :to="`/editbring/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Modifier
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteBring(id)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadBring, deleteBring } from '@/firebase'

export default {
  setup() {
    const bring = useLoadBring()
    console.log(bring)
    return { bring, deleteBring }
  }
}
</script>
