<template>
  <h1>Editar Tarea</h1>

  <form @submit.prevent="updateTaskAction(task)">
    <Input :task="task" />
  </form>

  <router-link
    class="btn btn-primary"
    to="/"
  >
    Volver
  </router-link>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "@/components/Input";

export default {
  name: "EditTask",

  components: {
    Input,
  },

  created() {
    this.setTaskAction(this.$route.params.id);
  },

  computed: {
    ...mapState(['task']),
  },

  methods: {
    ...mapActions([
      'setTaskAction',
      'updateTaskAction'
    ])
  },
}
</script>