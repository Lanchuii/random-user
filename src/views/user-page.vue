<template>
  <card style="width: 25rem; margin-bottom: 2em">
    <template #title>
      {{ fullName }}
    </template>
    <template #subtitle>
      <h5>Gender: {{ profileData?.gender }}</h5>
      <h5>Age: {{ profileData?.dob.age }}</h5>
    </template>
    <template #content>
      <img :src="profileData?.picture.large" width="150" />
      <h5>Address: {{ address }}</h5>
      <h5>Email: {{ profileData?.email }}</h5>
      <h5>Phone: {{ profileData?.phone }}</h5>
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
    const fullName = computed(()=>{
      return profileData.value?.name.first + ' ' + profileData.value?.name.last
    })

    const address = computed(()=>{
      return profileData.value?.location.city + ', ' + profileData.value?.location.country
    })
  
    const {
      viewProfile,
      userData,
      profileData,
    } = useFunction()

    return {
      props,
      viewProfile,
      userData,
      profileData,
      fullName,
      address
    }
  }
})
</script>