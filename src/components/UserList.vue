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
        <tr v-for="{ id, name, available } in users" :key="id">
          <td>{{ name }}</td>
          <td v-if="available == true">Oui</td>
          <td v-if="available == false">Non</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Modifier
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  setup() {
    const users = useLoadUsers()
    console.log(users)
    return { users, deleteUser }
  }
}
</script>
