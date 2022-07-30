import React from "react";


import { InteractiveWelcome } from "./InteractiveWelcome";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";


export class App extends React.Component{
    render() {
        return(
            <div>
                <InteractiveWelcome /> 
                <UncontrolledLogin />
                <TodoList />
            </div>
        )
    }
}   