import { useState, useEffect } from "react";
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

/*     console.log(data.name) */


    return (
    <div>
        <h3>{ username }</h3>
        {data && <p>{data.name}</p>}
    </div>
    )
}