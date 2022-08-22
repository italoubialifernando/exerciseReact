import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GitHubUserList() {


    const [user, setUser] = useState('');
    const [listUser, setListUSer] = useState([]);


    function handleChange(event) {
        setUser(event.target.value);
        console.log(user)
    }
    function HandleUserList() {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => { return response.json() })
            .then(json => {
                setListUSer((list) => [...list, json.name])
                setUser('')
               
            }) 
        

    }





    return (
        <div>
            <h1>black List user</h1>
            <ul>
                {listUser.map((name, index) => (
                <li key={index}>
                    <Link to={"/user/"+ name }  >{name}</Link> 
                    </li>))}
            </ul>
            <input
                name="addListUser,"
                value={user}
                onChange={handleChange}
            />
            <button onClick={HandleUserList} >add User to black List</button>
            <Outlet />
        </div>
    )

}