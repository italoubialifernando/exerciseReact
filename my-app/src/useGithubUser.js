import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser() {
    const {data, error } =useSWR(`https://api.github.com/users`, fetcher)

    return{
        users: data,
        error,
        isLoading: !data && !error
    }
}






/* import { useState } from "react";

export function GitHubUserList(user) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function FetchGithubUser(user) {
        setLoading(true)
        setError(null)

        try {
             const response = await fetch(`https://api.github.com/users/${user}`)
             const json = await response.json()
             setData(json)
        }catch(e){
            setError(e)
            setData(null)
        }finally{
            setLoading(false)
        }
    }
      
    
    return {
        fetchUser: FetchGithubUser(),
        data,
        error,
        loading
    }
}
 */