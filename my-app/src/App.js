import React from "react";

/* import { Wellcome } from "./Wellcome"; */
import { Message } from "./Message";
/* import { CounterDisplay } from "./CounterDisplay"; */
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";


export class App extends React.Component{
    render() {
        return(
            <div>
                <InteractiveWelcome/>
                <Message />
                <ClickTracker />
                <Login />
            </div>
        )
    }
}   