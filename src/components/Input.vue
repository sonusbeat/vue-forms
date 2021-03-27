<template>
  <div class="row">
    <div class="col-12 col-lg-6">
      <div class="form-group">
        <label for="taskName"><b>Tarea</b></label>

        <input
          id="taskName"
          type="text"
          class="form-control"
          v-model.trim="task.name"
        />
      </div>

      <section class="mb-4">
        <div class="form-group">
          <label for="hours">Horas</label>

          <input
            class="form-control"
            id="hours"
            type="number"
            v-model.number="task.hours"
          />
        </div>
      </section>
    </div><!-- /.col -->

    <div class="col-12 col-lg-6">
      <section class="mb-4">
        <h2>Radios</h2>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            id="urgent"
            type="radio"
            v-model="task.state"
            value="urgent"
          />

          <label class="form-check-label" for="urgent">Urgente</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            id="normal"
            type="radio"
            v-model="task.state"
            value="normal"
          />

          <label class="form-check-label" for="normal">Normal</label>
        </div>
      </section>

      <section class="mb-4">
        <h2>Checkboxes</h2>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            id="javascript"
            type="checkbox"
            v-model="task.languages"
            value="javascript"
          />
          <label class="form-check-label" for="javascript">Javascript</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            id="nodejs"
            type="checkbox"
            v-model="task.languages"
            value="nodejs"
          />

          <label class="form-check-label" for="nodejs">NodeJs</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            id="active"
            type="checkbox"
            v-model="task.active"
          />

          <label class="form-check-label" for="active">Activa</label>
        </div>
      </section>
    </div><!-- /.col -->
  </div><!-- /.row -->

  <div class="text-right mb-4">
    <!-- <input class="btn btn-success" type="submit" value="Enviar"> -->
    <button
      class="btn btn-success"
      type="submit"
      :disabled="blockSubmit"
    >
      Guardar
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    task: Object
  },
  computed: {
    blockSubmit() {
      return (this.task.name.trim() === '' || this.task.name.length < 3) ? true : false;
    }
  }
};
</script>
