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
    <Button @click="getUsers()"> GO </Button>
  </div>
  <div>
    <DataTable :value="userData">
      <Column header="Name">
        <template #body="slotProps">
          {{slotProps.data.name.title}} {{slotProps.data.name.first}} {{slotProps.data.name.last}}
        </template>
      </Column>
      <Column header="Image">
        <template #body="slotProps">
          <img :src="slotProps.data.picture.medium"/>
        </template>
      </Column>
      <Column field="gender" header="Gender"></Column>
      <Column field="email" header="Email"></Column>
      <Column header="Profile">
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import IUserData from '@/types/user-data'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Checkbox from 'primevue/checkbox';

export default {
  components: {
    Button,
    InputNumber,
    DataTable,
    Column,
    Checkbox
  },

  setup() {
    const userNum = ref(0)
    const userGender = ref('')
    const userData = ref<IUserData[]>([])
    
    async function getUsers(){
      const users = await fetch(`https://randomuser.me/api/?results=${userNum.value}&gender=${userGender.value}`)
      const json = await users.json()
      const data = json.results
      userData.value = data

      console.log(userData.value)
      }
      return {
        getUsers,
        userNum,
        userData,
        userGender
    }
  }
}
</script>
