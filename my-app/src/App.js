import React from "react";
import { CarDetails } from "./CarDetails";
import { Conteiner } from "./Conteiner";
import { GitHubUserList } from "./GitHubUserList";
import { HookCounter } from "./HookCounter";
import { ListFiltered } from "./ListFiltered";
/* import { CounterDisplay } from "./CounterDisplay"; */


/* 
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LenguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { Sum } from "./Sum";
import { TodoList } from "./TodoList";
 */

export function App() {
    return (
        <Conteiner>
            <GitHubUserList />
            <HookCounter />
            <ListFiltered />x\
            <CarDetails />
        </Conteiner>
    )







    /*     HandleRemove = (e) => {
            ((e.target).parentNode).remove()
        }
        state = {
            lenguage: "en"
        }
        handleLenguageChange = (event) => {
            this.setState({
                lenguage: event.target.value
    
            })
        }
        render() {
            return (
                <div>
                    <select style={{backgroundColor: "black"}} value={this.state.lenguage} onChange={this.handleLenguageChange}>
                        <option value="En">ENGLISH</option>
                        <option value="It">ITALIAN</option>
                    </select>
                    <LenguageContext.Provider value={this.state.language}>
                        <h1>{this.state.lenguage}</h1>
                        <Conteiner title="to the moon">
                            <InteractiveWelcome />
                            <Login />
                            <TodoList render={(list) => list.map((name, index) => (
                                <li key={name + index}>{name}
                                    <button onClick={this.HandleRemove}>
                                        remove
                                    </button>
                                </li>
                            ))}/>
                            <Sum />
                            <CounterDisplay />
                        </Conteiner>
                    </LenguageContext.Provider>
                </div>
            )
        } */
}   