import React from "react";
import { Conteiner } from "./Conteiner";


import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";


export class App extends React.Component {
    HandleRemove = (e) => {
        ((e.target).parentNode).remove()
    }
    render() {
        
        return (
            <Conteiner title="to the moon">
                <InteractiveWelcome />
                <Login />
                <TodoList render={(list) => list.map((name, index) => (
                    <li key={name + index}>{name}
                        <button onClick={this.HandleRemove}>
                            remove
                        </button>
                    </li>
                    ))}
                    
                />
            </Conteiner>
        )
    }
}   