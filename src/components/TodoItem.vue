<template>
  <div class="task">
    <div class="info">
      <input type="checkbox" id="completed" />
      <label for="completed" class="info__title">{{ todo.title }}</label>
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
      background: #fff;
      border: 1px solid #4e004834;
      vertical-align: middle;
      border-image: initial;
    }

    &:hover {
      color: #790170e6;
    }
  }
}

#completed {
  display: none;
}

// #completed:checked + .info__title::before {
//   content: '\2713';
//   color: #c66052;
// }
</style>
