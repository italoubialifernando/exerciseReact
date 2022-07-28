import React from "react";

import { Wellcome } from "./Wellcome";
import { Message } from "./Message";


export class App extends React.Component{
    render() {
        return(
            <div>
                <Wellcome name={"john"} age={68}/>
                <Message />
            </div>
        )
    }
}