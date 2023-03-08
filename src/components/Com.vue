<template>
  <h3>Com组件</h3>
  <button v-for="(item,index) in myBtn" :key="index" @click="changeCom(index)">{{item.name}}/</button>

   <component :is="showComponent.com"></component>
</template>

<script setup>
import {markRaw, reactive, provide, ref} from "vue";
import ComA from "./ComA.vue";
import ComB from "./ComB.vue";
import ComC from "./ComC.vue";

let myBtn = reactive([
  {name:'点A',component:markRaw(ComA)},
  {name:'点B',component:markRaw(ComB)},
  {name:'点C',component:markRaw(ComC)}
])
let num = ref(100000)
provide('myNum',num)
let showComponent = reactive({
  com:ComA
})
let changeCom = (index) => {
   showComponent.com = myBtn[index].component
}

</script>

<style scoped>

</style>