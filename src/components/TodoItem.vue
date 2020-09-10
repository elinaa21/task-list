<template>
  <div class="task">
    <div class="info">
      <input type="checkbox" id="completed" />
      <label
        for="completed"
        v-bind:class="[{ info__title_completed: todo.completed }, info__title]"
        v-on:click="todo.completed = !todo.completed"
        >{{ todo.title }}
      </label>
    </div>
    <button class="task__rm">&times;</button>
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

<style lang="scss">
.task {
  display: flex;
  justify-content: space-between;
  margin: 4% 15%;
  font: {
    family: Gill Sans, sans-serif;
    weight: 400;
    size: 20px;
  }
  color: #163541e0;

  &__rm {
    background-color: transparent;
    border: 2px solid #4e004863;
    width: 25px;
    height: 25px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 5px;
    box-sizing: border-box;

    &:hover {
      color: #ea535b;
      border: 2px #ea535b solid;
      border-radius: 10px;
      transition: 0.5s;
      font-size: 20px;
      width: 30px;
      height: 30px;
    }
  }
}

.info {
  width: 90%;
  text-align: left;

  &__title {
    cursor: pointer;

    &::before {
      content: ' ';
      display: inline-block;
      margin-right: 5%;
      text-align: center;
      text-indent: 0px;
      width: 25px;
      height: 25px;
      box-sizing: border-box;
      background: #fff;
      border: 1px solid #4e004834;
      vertical-align: middle;
      border-image: initial;
      transition: 0.5s;
    }

    &:hover {
      color: #790170e6;

      &::before {
        background-color: #79016f48;
      }
    }

    &_completed {
      text-decoration: line-through;
      color: #1635417e;

      &::before {
        content: '\2713';
        color: #c66052;
      }
    }
  }
}

#completed {
  display: none;
}
</style>
