import React from "react";

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";


export class App extends React.Component{
    render() {
        return(
            <div>
                <HelloWorld />
                <Message />
            </div>
        )
    }
}