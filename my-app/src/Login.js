import React from "react";

export class Login extends React.Component{
    state ={
        username: '',
        password :'',
        checked : '',
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    

    render(){
        return (
            <div>
                <h1>Login? </h1>

                <div>
                    <input
                    name="username"
                    value ={this.state.username}
                    onChange ={this.handleInputChange}
                    />
                    <input
                    name="password"
                    type="password"
                    value ={this.state.password}
                    onChange ={this.handleInputChange}
                    />
                    <input
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange ={this.handleInputChange}                
                    />
                </div>
            </div>
        )
    }
}