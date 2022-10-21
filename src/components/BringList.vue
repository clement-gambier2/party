<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">Nom</th>
          <th scope="col" class="py-3 px-6">Quoi ?</th>
          <th scope="col" class="py-3 px-6">Action</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="{ id, name, object } in bring" :key="id">
        <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{ name }}</td>
        <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{ object }}</td>
        <td>
          <router-link :to="`/editbring/${id}`">
            <button class="btn btn-primary btn-sm me-2  hover:underline mr-2">Modifier</button>
          </router-link>
          <button class="btn btn-danger btn-sm  hover:underline" @click="deleteBring(id)">Supprimer</button>
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
    return { bring, deleteBring }
  }
}
</script>
