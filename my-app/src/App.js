import React from "react";

import { Wellcome } from "./Wellcome";
import { Message } from "./Message";


export class App extends React.Component{
    render() {
        return(
            <div>
                <Wellcome name={"Don Quijote de La Mancha"} age={"82?"}/>
                <Message />
            </div>
        )
    }
}