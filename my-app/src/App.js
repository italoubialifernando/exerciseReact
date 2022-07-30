import React from "react";


import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";


export class App extends React.Component{
    render() {
        return(
            <div>
                <InteractiveWelcome /> 
                <Login />
                <TodoList />
            </div>
        )
    }
}   