<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapActions } from "vuex";

export default {
  components: {
    Navbar
  },

  methods:  {
    ...mapActions(['loadLocalStorageAction'])
  },

  created() {
    this.loadLocalStorageAction();
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
}
</style>
