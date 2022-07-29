import React from "react"
import { HelloWorld } from "./HelloWorld"


export class Welcome extends React.Component {
    render() {
        return (
        <div className="contet">
                {!! this.props.name && <h2 className="text_shadows"> Hello {this.props.name}</h2>}
                {!this.props.name && <HelloWorld grettering={"Hello world"}/>}
        </div>
        )
    }
}


