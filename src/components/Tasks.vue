<template>
  <section v-if="tasks.length">
    <h2>Lista de tareas</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categorias</th>
          <th>Estado</th>
          <th>Horas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.name }}</td>
          <td>{{ task.languages.join(', ') }}</td>
          <td>{{ task.state === "urgent" ? "Urgente" : "Normal" }}</td>
          <td>{{ task.hours }}</td>
          <td>
            <router-link
              class="btn btn-warning mr-2"
              :to="{
                name: 'EditTask',
                params: {
                  id: task.id
                }
              }"
            >
              Editar
            </router-link>
            <button class="btn btn-danger" @click="deleteTaskAction(task.id)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section v-else>
    <div class="alert alert-warning text-center">
      <b>Aún no hay tareas creadas</b>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Tasks",

  computed: {
    ...mapState(['tasks'])
  },

  methods: {
    ...mapActions(['deleteTaskAction']),
  }
}
</script>