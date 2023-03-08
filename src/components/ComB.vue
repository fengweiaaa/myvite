<template>
  <div>B</div>
  <div>我是通过provide传过来的值:{{myNum}}</div>
</template>

<script setup>
import {inject} from "vue";

let myNum = inject('myNum')

</script>

<style scoped>

</style>