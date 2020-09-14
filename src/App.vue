<template>
  <div class="app">
    <div class="app__task-field">
      <div class="date">{{ fullDate }}</div>
      <h1 class="header">My plans for today</h1>
      <div class="list">
        <TodoItem
          v-for="todo of todos"
          v-bind:todo="todo"
          :key="todo.id"
          @remove-todo="removeTodo"
        />
        <span v-if="!todos.length" class="header">No tasks</span>
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
      fullDate
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id);
      store.commit('REMOVE_TASK', this.todos);
      // this.todos = this.todos.filter(item => item.id !== id);
    },
    addTask(task) {
      // this.todos.push(task);
      console.log('here');
      store.commit('SET_TASK', task);
    }
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
