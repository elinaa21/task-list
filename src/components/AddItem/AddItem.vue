<template>
  <div class="add-item">
    <input
      type="text"
      class="add-item__input"
      v-model="title"
      @keyup.enter="addItem"
    />
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

<style lang="scss" src="./AddItem.scss"></style>
