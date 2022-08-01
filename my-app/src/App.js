import React from "react";
import { Conteiner } from "./Conteiner";


import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";


export class App extends React.Component {
    render() {
        return (
            <Conteiner title="to the moon">
                <InteractiveWelcome />
                <Login />
                <TodoList />
            </Conteiner>
        )
    }
}   