import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser(username) {
    const {data, error, mutate } =useSWR(`https://api.github.com/users/${username}`, fetcher)

    function fetchGithubUser() {
        mutate()
    }

    return{
        users: data,
        error,
        isLoading: !data && !error,
        onFetchUser: fetchGithubUser()
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