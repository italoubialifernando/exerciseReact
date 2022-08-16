import { useState } from "react";

export function GitHubUserList(user) {


    const [data, setData] = useState('');
  
    function FetchGithubUser() {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => { return response.json() })
            .then(json => {setData(json)})
    }
    return {
        fetchUser: FetchGithubUser(),
        dataUser:data
    }
}
