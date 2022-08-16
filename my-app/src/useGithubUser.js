import { useState } from "react";

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
