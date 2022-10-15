<template>
  <section>
    <h1> Ce que j'apporte </h1>
    <BringList />
    <BringCreate />
  </section>
</template>


<script>
  import BringList from "@/components/BringList.vue";
import BringCreate from "../components/BringCreate.vue";
  export default {
    components: { BringList, BringCreate }
  }


</script>