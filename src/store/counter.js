import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        },

        async waitAdd(){
            setTimeout(() => {
                this.count++
            }, 2000);
        },
        getters:{
            doubleCount: (state) => state.count * 2
        }
    }
})