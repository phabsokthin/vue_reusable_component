<template>
    <h1>Home Pinia</h1>

    <h1>{{ store.count }}</h1>
    <h1>{{ store.doubleCount }}</h1>
    <button @click="store.increment(1)">Increment</button>

    <h1>{{ taskStore.names }}</h1>
    <hr>

    <input type="text" v-model="title"><button @click="handleSubmit">Submit</button>
    <div v-for="task in taskStore.tasks" :key="task.id">
        <div>{{ task.title }}</div>
        <div>{{ task.isFav }}</div>
        <button @click="taskStore.deleteTask(task.id)">Delete</button>
    </div>

    <pre>{{ apiStore.getStoreData }}</pre>

</template>

<script setup>
import { useCounterStore } from '@/store/counter';
import {useTaskStore} from '@/store/taskStore'
import { onMounted, ref } from 'vue';
import { useApiStore } from '@/store/fectApi';
import {api_url} from '@/utils/api'


const title = ref("")

const store = useCounterStore();

const taskStore = useTaskStore();

store.count++;
store.increment(2)

const apiStore = useApiStore();

onMounted(() => {
    apiStore.fetchData(api_url);
})



const handleSubmit = () => {
    taskStore.addTask({
        id: taskStore.tasks.length + 1,
        title: title.value,
        isFav: false
    })
}

// taskstore


</script>