import React from "react";
import { Calc } from "./Calc";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";




export class App extends React.Component{
    render() {
        return(
            <div>
                <Welcome />
                <Calc a={2}b={3} />
            </div>
        )
    }
}