<template>
  <div>A</div>
  <div>我是通过provide传过来的值:{{myNum}}</div>
  <button @click="changeNum">改变</button>
</template>

<script setup>
import {inject} from "vue";

let myNum = inject('myNum')
let changeNum =  () => {
  myNum.value = 1
}
</script>

<style scoped>

</style>