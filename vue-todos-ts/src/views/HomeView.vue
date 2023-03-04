<template>
  <!-- html5 语义化 -->
  <main>
    <h1>todos</h1>
    <form class="addForm" @submit.prevent="addTodo">
      <label for="add">Add todo</label>
      <div class="s1">
        <input type="text" name="add" id="add" v-model="currentTodoInp">
        <button type="submit">Add</button>
      </div>
    </form>
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todos'
// import { useProductStore } from '../store/products'

let currentTodoInp = ref('')
const todoStore = useTodoStore()
todoStore.initFromLocalStorage() // 从localStorage  拿出来并更新到store 中
// const productStore = useProductStore()
// todoStore.addTodo("啊啊啊啊啊啊啊啊")
// productStore.fetchAll()

const addTodo = () => {
  const text = currentTodoInp.value
  currentTodoInp.value = ""

  if (text.trim() !== "") { //字符处理函数Trim 截去字串首尾的空格 
    todoStore.addTodo(text.trim())
  }
}
</script>

<style scoped></style>