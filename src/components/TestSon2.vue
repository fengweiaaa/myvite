<template>
  <div>
    我是第二个test的子组件
    {{s}}
  </div>
  <hr>
  <span>我是插槽内容</span>
  <slot name="xxx"></slot>
  <div>
    <teleport to=".teleport">
      <div>我是teleport标签传送过来的</div>
    </teleport>
  </div>
</template>

<script setup>
import emitter from "../plugins/Bus.js";
import {onBeforeMount, ref} from "vue";
let s = ref('')
onBeforeMount(() => {
  emitter.on('fn',e => {
    s.value = e.value
    console.log(e.value)
  })
})
</script>

<style scoped>

</style>