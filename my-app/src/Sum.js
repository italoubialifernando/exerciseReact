import React from "react";

export function Sum ({numbers= [0, 0]}){
    return (
        <h1>{numbers.reduce((a, b)=> a+b)}</h1>
    )
}