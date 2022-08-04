import React from "react";
import { Conteiner } from "./Conteiner";


import { InteractiveWelcome } from "./InteractiveWelcome";
import { LenguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { TodoList } from "./TodoList";


export class App extends React.Component {
    HandleRemove = (e) => {
        ((e.target).parentNode).remove()
    }
    render() {
        state = {
            lenguage: "en"
        }
        handleLenguageChange = (event) => {
            this.setState({
                lenguage: event.target.value

            })
        }

        return (
            <div>
                <select value={this.state.lenguage} onChange={this.handleLenguageChange}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIAN</option>
                </select>
                <LenguageContext.Provider value={this.state.language}>
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
                </LenguageContext.Provider>
            </div>
        )
    }
}   