import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    constructor(props){
        super(props)
    
        setInterval(()=> {this.setState({
            cont: this.state.count + this.props.incrementBy
        })}, 1000)

    }
   
    


    render  () {
        return (
            <div>
                <h1> count: {this.state.count}</h1>
            </div>)
    }
}


Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}