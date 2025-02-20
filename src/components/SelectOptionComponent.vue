<template>
    <div>
        <label for="">{{ label }}</label>
        <select :value="modelValue" @input="updateValue">
            <option value="">{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option[valueName]">
                {{ option[labelField] }}
            </option>
        </select>
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
            default: 'Please select an option'
        },
        options: {
            type: Array,
            required: true,
            validator: (value) => value.every(option => 'label' in option && 'id' in option)
        },
        modelValue: {
            type: [String, Number], 
            default: ''
        },
        labelField: {
            type: String, 
            default: 'names',
            retuired: true
        },
        valueName: {
            type: Number,
            required: true
        }
    },

    setup(props, { emit }) {

        const updateValue = (event) => {
            emit('update:modelValue', event.target.value);
        } 


        return {updateValue}

    }
}
</script>
