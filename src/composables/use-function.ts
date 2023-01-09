import { ref, computed } from 'vue'
import IUserData from '@/types/user-data'

const userData = ref<IUserData[]>([])
const profileData = ref<IUserData>()

export function useFunction() {        
    function viewProfile(index: number){
        profileData.value = userData.value[index]
        console.log(profileData)
    }
    
    const fullName = computed(()=>{
        return profileData.value?.name.first + ' ' + profileData.value?.name.last
      })

    const address = computed(()=>{
        return profileData.value?.location.city + ', ' + profileData.value?.location.country
      })

    async function getUsers(userNum: number, userGender: string){
        const users = await fetch(`https://randomuser.me/api/?results=${userNum}&gender=${userGender}`)
        const json = await users.json()
        userData.value = json.results
    }
    return {
        viewProfile,
        getUsers,
        userData,
        profileData,
        fullName,
        address
    }
}