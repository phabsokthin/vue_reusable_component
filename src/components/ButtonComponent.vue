<template>
    <button :class="buttonClass" :disabled="disabled" @click="handleEnabled">
        {{ label }}
    </button>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, {emit}) {

        const buttonClass = computed(() => ({
            'btn': true,
            [`btn-${props.type}`]: true,
            'btn-disabled': props.disabled
        }));


        const handleEnabled = (event) => {
            if (!props.disabled) {
                emit('click', event); 
            }
        };


        return { buttonClass,handleEnabled }
    }
};
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: white;
}

.btn-primary {
    background-color: blue;
}

.btn-secondary {
    background-color: gray;
    border: 1px dotted black;
}

.btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-danger {
    background-color: red;
}
</style>