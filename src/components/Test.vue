<template>
  <div>Test</div>
  <hr>
  <TestSon :msg="msg" v-model:num="num"></TestSon>
  <hr>
  <div class="teleport"></div>
  <hr>
  <TestSon2>
    <template #[xxx]>哈哈哈哈</template>
  </TestSon2>
  <hr>
  <button @click="change">切换插槽内容</button>
</template>

<script setup>
import TestSon from "./TestSon.vue";
import TestSon2 from "./TestSon2.vue";
import {ref} from "vue";
let msg = ref('父亲传过来的值')
let num = ref(100)
let xxx = ref('xxx')
let change = () => {
  xxx.value = 'yyy'
}
</script>

<style scoped>

</style>