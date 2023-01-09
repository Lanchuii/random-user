<template>
  <card style="width: 25rem; margin-bottom: 2em">
    <template #title>
      {{ fullName }}
    </template>
    <template #subtitle>
      <h5>Gender: {{ showProfile.gender }}</h5>
      <h5>Age: {{ showProfile.dob.age }}</h5>
    </template>
    <template #content>
      <img :src="showProfile.picture.large" width="150" />
      <h5>Address: {{ address }}</h5>
      <h5>Email: {{ showProfile.email }}</h5>
      <h5>Phone: {{ showProfile.phone }}</h5>
    </template>
    <template #footer>
      <router-link :to="`/`">Return to Homepage </router-link>
    </template>
  </card>
</template>

<script lang="ts">
import { useFunction } from '@/composables/use-function';
import { computed, defineComponent } from 'vue';

import Card from 'primevue/card';

export default defineComponent({
  components: {
    Card
  },
  props: [ 'id' ],
  setup(props){
    const showProfile = computed(()=>{
      return userData.value[props.id]
    })
  
    const {
      viewProfile,
      userData,
      profileData,
      fullName,
      address
    } = useFunction()

    return {
      props,
      viewProfile,
      userData,
      profileData,
      fullName,
      showProfile,
      address
    }
  }
})
</script>