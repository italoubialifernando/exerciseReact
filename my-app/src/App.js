import React from "react";

import { Wellcome } from "./Wellcome";
import { Message } from "./Message";
import { Counter } from "./Counter";


export class App extends React.Component{
    render() {
        return(
            <div>
                <Wellcome name={"john"} age={68}/>
                <Message />
                <Counter />
            </div>
        )
    }
}