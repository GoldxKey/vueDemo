<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import todoList from './components/todoList'
export default {
  components: {
    todoList
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
