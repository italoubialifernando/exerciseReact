import React from "react"
import { HelloWorld } from "./HelloWorld"


export function Welcome(props) {
    return (
        <div>
            {!!props.name &&  <div className="contet"><h2 className="text_shadows"> Hello {props.name}</h2> </div>}
            {!props.name && <HelloWorld grettering={"Hello world"} />}
        </div>
    )
}


