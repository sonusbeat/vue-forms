<template>
  <form @submit.prevent="processForm">
    <Input :task="task" />
  </form>
  <Tasks />
</template>

<script>
import Input from "../components/Input";
import Tasks from "../components/Tasks";
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: 'Home',
  components: {
    Input,
    Tasks
  },
  data() {
    return {
      task: {
        id: "",
        name: "",
        languages: [],
        active: false,
        state: "",
        hours: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTasksAction']),

    processForm() {
      // Validate form
      if(this.task.name.trim() === "") {
        console.log(this.task.name);
        return;
      }

      this.task.id = shortid.generate();

      this.setTasksAction(this.task);

      console.log("Formulario Enviado");

      // Clean Form
      this.task = {
        id: "",
        name: "",
        languages: [],
        active: false,
        state: "",
        hours: 0
      };
    }
  }
}
</script>
