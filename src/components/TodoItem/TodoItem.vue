<template>
  <div class="task">
    <div class="info">
      <input type="checkbox" id="completed" />
      <label
        for="completed"
        v-bind:class="[{ info__title_completed: todo.completed }, info__title]"
        @click="todo.completed = !todo.completed"
        >{{ todo.title }}
      </label>
    </div>
    <button class="task__rm" v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      info__title_completed: 'info__title_completed',
      info__title: 'info__title'
    };
  }
};
</script>

<style lang="scss" src="./TodoItem.scss"></style>
