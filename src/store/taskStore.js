import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Task 1',
                isFav: false
            },
            {
                id: 2,
                title: 'Task 2',
                isFav: false
            },
            {
                id: 3,
                title: 'Task 3',
                isFav: true
            }
        ],
        names: "Dara"
    }),
    getters: {
      favTask(){
        return this.tasks.filter(task => task.isFav)
      }
    },
    actions: {
        addTask(task){
            return this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(task => task.id !== id)
        }
    }
})