import React from "react";

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";


export class App extends React.Component{
    render() {
        return(
            <div>
                <HelloWorld name={"Don Quijote de La Mancha"}/>
                <Message />
            </div>
        )
    }
}