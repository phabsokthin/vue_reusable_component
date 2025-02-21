<template>
    <!-- <Button label="Click Me" type="danger"  @click="handleclick"/>
    <FormInput label="Enter Your Name" v-model="inputData" palacholder="Enter Your Name" />
    <FormInput label="Enter Your Email" v-model="email" palacholder="Enter Your Email" />

    <h1>Email {{ email }}</h1>
    <h1>data {{ inputData }}</h1>

   
     <SelectOption label="Select Your Country" v-model="countName"   :options="countries" labelField="name" valueName="ids"/>
     <h1>Selected option: {{ countName }}</h1> -->


    <HomePinia/>

</template>

<script>
import { ref } from 'vue';
// import Button from '../components/ButtonComponent.vue';
// import FormInput from '../components/FormInputComponent.vue';
// import SelectOption from '@/components/SelectOptionComponent.vue';
import HomePinia from './HomePinia.vue';



export default {
    components: {
        // Button,
        // FormInput,
        // SelectOption
        HomePinia
     
    },
    setup() {

        const inputData = ref('');
        const email = ref("")
        const countName = ref('')

        //customer static data to select 

        const countries = ref([
            {   
                ids: 1,
                name: "Nepal",
            },
            {
                ids: 2,
                name: "India",
            },
            {
                ids: 3,
                name: "China",
            },
            {
                ids: 4,
                name: "USA",
            }
            
        ])


        const handleclick = () => {
            console.log('Button Clicked');
        }

        

        return {handleclick, inputData,email, countries,countName}
    }
}

</script>