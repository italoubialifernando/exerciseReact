import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";




export class App extends React.Component{
    render() {
        return(
            <div>
                <Welcome name={"Italo"} />
            </div>
        )
    }
}