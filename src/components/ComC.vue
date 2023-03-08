<template>
  <div>C</div>
  <div>{{ num }}</div>
  <button @click="changeStore">改变store值</button>
</template>

<script setup>
// import {computed} from "vue";
// import {useStore} from "vuex";
// let store = useStore()

// let num = computed(() => store.state.user.num)
let changeStore = ()=> {
  num.value++
}
import { useUser } from "../store/user";
import {storeToRefs} from "pinia";

let userStore = useUser()
let { num } = storeToRefs(userStore)

</script>

<style scoped>

</style>