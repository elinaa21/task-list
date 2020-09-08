<template>
  <div class="app">
    <div class="app__task-field">
      <h1>Thursday, 8 September 2020</h1>
      <h1></h1>
      <List />
    </div>
  </div>
</template>

<script>
import List from '@/components/List';

export default {
  name: 'App',
  components: {
    List
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
    background-color: rgba(255, 255, 255, 0.596);
    width: 70%;
    height: 80%;
    text-align: center;
    border-radius: 12px;
  }
}
</style>
