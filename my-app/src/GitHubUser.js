import { useState, useEffect } from "react";

export function GitHubUser({ username }) {
    const[data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>{return response.json()})
        .then(json => {console.log(json)
             setData(json)})
    },[username])

/*     console.log(data.name) */


    return <div>{data && <h1>{data.name}</h1>}</div>
}