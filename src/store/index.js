import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    task: {
      id: '',
      name: '',
      languages: [],
      active: false,
      state: '',
      hours: 0
    },
    tasks: []
  },

  mutations: {
    set(state, payload) {
      state.tasks.push(payload);
    },

    task(state, payload) {
      if(!state.tasks.find(task => task.id === payload)) {
        router.push('/');
        return;
      }

      state.task = state.tasks.find(task => task.id === payload);
    },

    update(state, payload) {
      state.tasks = state.tasks.map(task => task.id === payload.id ? payload : task);
      router.push('/');
    },

    delete(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload);
    },
  },

  actions: {
    setTasksAction({ commit }, task) {
      commit('set', task);
    },

    setTaskAction({ commit }, id) {
      commit('task', id);
    },

    updateTaskAction({ commit }, task) {
      commit('update', task);
    },

    deleteTaskAction({ commit }, id) {
      commit('delete', id);
    },
  },

  modules: {
  }
})
