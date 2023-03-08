<template>
<div>
  我是子组件
  <br>
  {{msg}}
  <br>
  {{num}}
  <button @click="change">改变</button>
  <button @click="transmit">传递</button>
</div>
</template>

<script setup>
import {defineProps, defineEmits, ref, onBeforeMount} from 'vue'
import emitter from "../plugins/Bus.js";
defineProps({
  msg: { type:String },
  num: { type:Number }
})
let emit = defineEmits(['update:num'])
let str = ref('我是从兄弟a传递给兄弟b的值')
let transmit = () => {
  emitter.emit('fn',str)
}
let change = () => {
  emit('update:num',200)
}

</script>

<style scoped>

</style>