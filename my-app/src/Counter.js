import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0
    }

    constructor(props){
        super(props)
    
        setInterval(()=> {this.setState({
            cont: this.state.count +=1,
        })}, 1000)

    }
   
    


    render  () {
        return (
            <div>
                <h1> count: {this.state.count}</h1>
            </div>)
    }
}


