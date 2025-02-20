<template>
    <div>
        <label for="">{{ label }}</label>
        <input 
            type="text" 
            :placeholder="placeholder" 
            :value="modelValue" 
            @input="updateValue"  
        />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    
    setup(props, { emit }) {
        const updateValue = (event) => {
            emit('update:modelValue', event.target.value); 
        };

        return { updateValue };
    }
}
</script>
