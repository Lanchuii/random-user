let json = [] as any

async function useFetch(baseUrl: string) {  
    const fetchData = async()=> {
        const users = await fetch(baseUrl)
        json = await users.json()
  
    }
    await fetchData()
    return {
        json
    }
}
export default useFetch