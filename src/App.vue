<template>
  <div class="app">
    <div class="app__task-field">
      <div class="date">Thursday, 8 September 2020</div>
      <h1 class="header">My plans for today</h1>
      <div class="list">
        <TodoItem
          v-for="todo of todos"
          v-bind:todo="todo"
          :key="todo.id"
          @remove-todo="removeTodo"
        />
      </div>
      <AddItem @add-item="addTask" />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem/TodoItem';
import AddItem from '@/components/AddItem/AddItem';

const todos = [
  { id: 1, title: 'Buy coffee', completed: false },
  { id: 2, title: 'Feed the dog', completed: false },
  { id: 3, title: 'Save the world', completed: false },
  { id: 4, title: 'Buy coffee', completed: false },
  { id: 5, title: 'Feed the dog', completed: false }
];

export default {
  name: 'App',
  components: {
    TodoItem,
    AddItem
  },
  data() {
    return {
      todos
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },
    addTask(task) {
      this.todos.push(task);
    }
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
