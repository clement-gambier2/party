<template>
  <Birthday />
  <section class="flex justify-center ">
    <UserCreate />
  </section>
  <UserList />
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import Birthday from '@/components/Birthday.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList, Birthday }
}
</script>
