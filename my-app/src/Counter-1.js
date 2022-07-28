import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    handleCounterIncrement = ()=> {
        
        this.setState(state => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }


    render  () {
        return (
            <div>
                <h3> count: {this.state.count}</h3>
                <button onClick={this.handleCounterIncrement}>increment</button>
            </div>)
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}