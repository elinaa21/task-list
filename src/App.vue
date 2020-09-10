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
      <AddItem />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
import AddItem from '@/components/AddItem';

const todos = [
  { id: 1, title: 'Buy coffee', completed: false },
  { id: 2, title: 'Feed the dog', completed: false },
  { id: 3, title: 'Save the world', completed: false },
  { id: 4, title: 'Buy coffee', completed: false },
  { id: 5, title: 'Feed the dog', completed: false },
  { id: 6, title: 'Save the world', completed: false },
  { id: 7, title: 'Buy coffee', completed: false },
  { id: 8, title: 'Feed the dog', completed: false },
  { id: 9, title: 'Save the world', completed: false }
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
      this.todos = this.todos.filter(item => item.id !== id)
    }
  }
};
</script>

<style lang="scss">
.app {
  background-image: url('./img/ocean.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__task-field {
    background-color: rgba(236, 255, 251, 0.596);
    width: 70%;
    height: 80%;
    text-align: center;
    border-radius: 12px;
  }
}

.list {
  overflow: scroll;
  height: 67%;
}

.date {
  font: {
    family: Gill Sans, sans-serif;
    style: italic;
    weight: 600;
    variant: small-caps;
  }
  color: rgba(63, 0, 82, 0.829);
  padding: 1%;
  border-bottom: rgba(130, 86, 134, 0.623) solid 2px;
}

.header {
  font: {
    family: Gill Sans, sans-serif;
    weight: 600;
  }
  color: #163541e0;
}
</style>
