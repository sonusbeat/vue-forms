<template>
  <form @submit.prevent="processForm">
    <div class="form-group">
      <label for="taskName"><b>Tarea</b></label>

      <input
        id="taskName"
        type="text"
        class="form-control"
        v-model.trim="task.name"
      >
    </div>

    <section class="mb-4">
      <h2>Checkboxes</h2>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          id="javascript"
          type="checkbox"
          v-model="task.languages"
          value="javascript"
        >
        <label class="form-check-label" for="javascript">Javascript</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          id="nodejs"
          type="checkbox"
          v-model="task.languages"
          value="nodejs"
        >

        <label class="form-check-label" for="nodejs">NodeJs</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          id="active" type="checkbox"
          v-model="task.active"
        >

        <label class="form-check-label" for="active">Activa</label>
      </div>
    </section>

    <section class="mb-4">
      <h2>Radios</h2>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          id="urgent"
          type="radio"
          v-model="task.state"
          value="urgent"
        >

        <label class="form-check-label" for="urgent">Urgente</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          id="normal"
          type="radio"
          v-model="task.state"
          value="normal"
        >

        <label class="form-check-label" for="normal">Normal</label>
      </div>
    </section>

    <section class="mb-4">
      <div class="form-group">
        <label for="hours">Horas</label>

        <input
          class="form-control"
          id="hours"
          type="number"
          v-model.number="task.hours"
        >
      </div>
    </section>

    <div class="text-right">
      <!-- <input class="btn btn-success" type="submit" value="Enviar"> -->
      <button
        class="btn btn-dark btn-block btn-lg"
        type="submit"
        :disabled="blockSubmit"
      >Enviar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      task: {
        name: "",
        languages: [],
        active: false,
        state: "",
        hours: 0
      }
    }
  },
  methods: {
    processForm() {
      if(this.task.name.trim() === "") {
        console.log(this.task.name);
        return;
      }

      console.log("Se envia el formulario");

      this.task = {
        name: "",
        languages: [],
        active: false,
        state: "",
        hours: 0
      };
    }
  },
  computed: {
    blockSubmit() {
      return (this.task.name.trim() === '' || this.task.name.length < 3) ? true : false;
    }
  }
}
</script>
