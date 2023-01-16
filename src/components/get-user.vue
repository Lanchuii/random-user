<template>
    <div>
        <label for="userNumber">Number of Users to display </label>
        <InputNumber inputId="userNumber" v-model="userNum" name="userNumber" />
        <div>
        <Checkbox inputId="male" value="male" v-model="userGender" />
        <label for="male">male</label>
        </div>
        <div>
        <Checkbox inputId="female" value="female" v-model="userGender" />
        <label for="female">female</label>
        </div>
        <Button @click="getUsers(userNum, userGender)" > GO </Button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Checkbox from 'primevue/checkbox';

export default defineComponent({
    components: {
        Button,
        InputNumber,
        Checkbox
    },
    emits: ['get-user'],
    setup(props, {emit}) {
        const userNum = ref(0)
        const userGender = ref('')

        function getUsers(num: number, gender: string){
            emit('get-user', num, gender)
        }
        return { 
            getUsers,
            userNum,
            userGender
         }
    },
})
</script>
