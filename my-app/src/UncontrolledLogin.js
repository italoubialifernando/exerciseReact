import React from "react";

export class UncontrolledLogin extends React.Component {
    
    state ={

    }

    handleLogin = (event) => {
        event.preventDefault() 

        const username = event.target.elements.username.value
        const password = event.target.elements.password.name
        console.log(username, password)
    }


    render() {
        return (
            <div>
                <h1>Login? </h1>

                <div>
                    <form onSubmit={this.handleLogin}>
                        <input
                            autoFocus
                            name="username"
                        />
                        <input
                            name="password"
                            type="password"
                        />
                        <input
                            name="remember"
                            type="checkbox"
                        />
                        <button type="submit" >login?</button>
                    </form>

                </div>

            </div>
        )
    }
}