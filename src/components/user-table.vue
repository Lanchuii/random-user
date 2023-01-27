<template>
    <DataTable 
        :value="userData" 
    >
        <Column header="Name">
            <template #body="slotProps">
                {{slotProps.data.name.first}} {{slotProps.data.name.last}}
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
            <template #body="slotProps">
                <router-link :to="`/userPage/`+ slotProps.index" @click="viewProfile(slotProps.index)">View </router-link>
            </template>
        </Column>
    </DataTable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IUserData from '@/types/user-data'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
    emits: [ 'user-data', 'view-profile' ],
    components: {
        DataTable,
        Column
    },
    props: {
        userData: {
            type: Object as PropType<IUserData[]>,
            required: true
        }
    },
    setup(props, {emit}) {
        function viewProfile(index: number){
            emit('view-profile', index)
        }
        
        return { 
            viewProfile,
            props
        }   
    }
        
})
</script>
