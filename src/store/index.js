import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    SET_TASK: (state, payload) => {
      state.todos.push(payload);
    },
    REMOVE_TASK: (state, payload) => {
      state.todos = state.todos.filter(item => item.id !== payload);
    }
  },
  actions: {},
  getters: {
    TASKS: state => {
      return state.todos;
    }
  }
});
