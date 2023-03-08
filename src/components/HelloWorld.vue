<template>
  <h4>{{ obj }}</h4>
  <button @click="myClick">加c</button>
  <br>
  <h4>{{ num }}</h4>
  <button @click="myClick2">加1</button>
  <br>
  <h4>{{ name }}:{{ age }}</h4>
  <button @click="myClick3">改名字</button>
  <br>
  <h4>{{ total }}</h4>
  <br>
  <div>
    <input type="text" v-model="ipt1.myInput">
  </div>
  <button @click="go">跳转test</button>
</template>

<script setup>

import {computed, reactive, ref, toRefs, watch} from "vue";
import {useRouter} from "vue-router";
let router = useRouter()
let go = () => {
  router.push('/test')
}
let num1 = 5
let num2 = 7
let total = computed(() => {
  return num1 + num2
})
let ipt1 = reactive({
  myInput:1
})
watch(()=>ipt1.myInput,(value, oldValue, onCleanup) => {
  console.log(value,oldValue)
})
let obj = reactive({
  a:1,
  b:2
})
let obj2 = reactive({
  name:'张三',
  age:11
})
let {name,age} = toRefs(obj2)
let myClick3 = () => {
  name.value = '李四'
}
let myClick = () => {
  obj.c = 3
}

let num = ref(1)
let myClick2 = () => {
  num.value++
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
