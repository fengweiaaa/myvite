import { defineStore } from "pinia";
export const useUser =  defineStore('user',{
    state:() => {
        return{
            num:1,
            name:'小王',
            age:18
        }
    },
    getters:{},
    actions:{},
    persist:{
        enabled:true,//开启此文件中的数据持久化存储
        strategies:{
            storage:'localStorage',//默认为存储在sessionStorage中,修改为localStorage
            path:['num','age']//需要进行持久存储的数据，不写此项默认全部存储
        }
    }
})