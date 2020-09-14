<template>
  <div class="app">
    <div class="app__task-field">
      <div class="date">{{ fullDate }}</div>
      <h1 class="header">My plans for today</h1>
      <select v-if="todos.length" v-model="filter">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="not-completed">not completed</option>
      </select>
      <div class="list">
        <TodoItem
          v-for="todo of filteredTasks"
          v-bind:todo="todo"
          :key="todo.id"
          @remove-todo="removeTodo"
        />
        <span v-if="!filteredTasks.length" class="header">No tasks</span>
      </div>
      <AddItem @add-item="addTask" />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem/TodoItem';
import AddItem from '@/components/AddItem/AddItem';
import store from './store';

const todos = store.getters.TASKS;

const date = new Date();
const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const fullDate = `${dayOfWeek[date.getDay()]}, ${date.getDate()} ${
  month[date.getMonth()]
} ${date.getFullYear()}`;

export default {
  name: 'App',
  components: {
    TodoItem,
    AddItem
  },
  data() {
    return {
      todos,
      fullDate,
      filter: 'all'
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id);
      store.commit('REMOVE_TASK', this.todos);
    },
    addTask(task) {
      store.commit('SET_TASK', task);
    }
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed);
      } else {
        return this.todos.filter(t => !t.completed);
      }
    }
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
