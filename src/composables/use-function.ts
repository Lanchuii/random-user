import { ref } from 'vue'
import IUserData from '@/types/user-data'
import useFetch from './use-fetch'
import apiNames from '@/constants/api-names'

const userData = ref<IUserData[]>([])
const profileData = ref<IUserData>()

export function useFunction() {    
    function viewProfile(index: number){
        profileData.value = userData.value[index]
        console.log(profileData)
    }
    async function getUsers(userNum: number, userGender: string){
        const paramsObj = {results: userNum.toString(), gender: userGender}
        const searchParams = new URLSearchParams(paramsObj)
        const { json } = await useFetch(`${apiNames.randomUser}/?${searchParams}`)
        userData.value = json.results

        console.log(userData.value)
    }
    return {
        viewProfile,
        getUsers,
        userData,
        profileData
    }
}