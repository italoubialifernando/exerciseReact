import React from "react";

export class CounterDisplay extends React.Component {
    state = {
        count: this.props.initialValue
    }

// credo di no perche e tipo un use effect renderiza dopo il caricamente della page creddooo...
    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return{
                 cont: state.count += this.props.incrementBy   
                }
            })
        }, 1000)

    }



    render() {
        return (
            <div>
                <h1> count: {this.state.count}</h1>
            </div>)
    }
}


CounterDisplay.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}