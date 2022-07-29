import React from "react";

export class CounterDisplay extends React.Component {
    state = {
        count: this.props.initialValue
    }


    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return{
                 cont: state.count += this.props.incrementBy   
                }
            })
        }, 1000)        
    }


    handleCounterIncrement = ()=> {
        
        this.setState(state => {
            return {
                count: state.count + Math.random()
            }
        })
    }




    render() {
        return (
            <div>
                <h1> count: {this.state.count}</h1>
                <button onClick={this.handleCounterIncrement}>increment</button>
            </div>)
    }
}


CounterDisplay.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}