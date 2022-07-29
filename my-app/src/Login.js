import React from "react";

export class Login extends React.Component{
    state ={
        username: '',
        password :'',
        checked : '',
        login: false ,
        disabled : ''
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
            disabled : ( (this.state.username.length > 0 &&  this.state.password.length> 0 ) ? !!true : !!false)
       
        })
    
    }

    handleLogin=() =>{
        this.setState({
            login : true
        })       
    }
    handleResetState =() => {
        this.setState({
            username: '',
            password :'',
            checked : '',
            login: false ,
            disabled : ''
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
                <button disabled={!this.state.disabled} onClick={this.handleLogin}>login?</button>
                <button onClick={this.handleResetState}>Reset</button>
            </div>
        )
    }
}