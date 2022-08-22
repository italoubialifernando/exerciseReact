import { useGithubUser } from "./useGithubUser"

export function GitHubUser(){
const {users, error, isLoading} = useGithubUser()


    return <div>
        {isLoading && <h3>loading...</h3>}
        {error && <h3>ErroR ....</h3>}
        {users && <ul>
            {users.map(user => (
                <li key={user.login}>{user.login}</li>
            ))}
            </ul>}
    </div>
}




/* import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function GitHubUser() {
    
    const { username } = useParams()
    const[data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>{return response.json()})
        .then(json => {console.log(json)
             setData(json)})
    },[username])




    return (
    <div>
        <h3>{ username }</h3>
        {data && <p>{data.name}</p>}
    </div>
    )
} */