<template>
  <div class="add-item">
    <input type="text" class="add-item__input" v-model="title" />
    <button class="add-item__button" @click="addItem">&plus;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    addItem() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };

        this.$emit('add-item', newTodo);
        this.title = '';
      }
    }
  }
};
</script>

<style lang="scss">
.add-item {
  position: fixed;
  bottom: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  border-top: #46889bb0 solid 2px;
  height: 10%;

  &__input {
    width: 70%;
    outline: none;
    border: none;
    padding: 0 2%;
    border-radius: 15px;
    height: 30%;
    font-family: inherit;
  }

  &__button {
    width: 40px;
    height: 40px;
    font-size: 30px;
    border-radius: 15px;
    border: #336472d2 2px solid;
    cursor: pointer;
    background-color: transparent;
    color: #336472d2;
    outline: none;
  }
}
</style>
