<template>
  <div>
    <get-user @get-user="getUsers"/>
  </div>
  <div>
    <userTable :userData="userData" @view-profile="viewProfile"/>
  </div>
</template>

<script lang="ts">
import { useFunction } from '@/composables/use-function'

import getUser from '@/components/get-user.vue'
import userTable from '@/components/user-table.vue';

export default {
  components: {
    getUser,
    userTable
  },

  setup() {

    const {
      viewProfile,
      getUsers,
      userData,
      profileData
    } = useFunction()

    return {
      getUsers,
      viewProfile,
      userData,
      profileData
    }
  }
}
</script>
