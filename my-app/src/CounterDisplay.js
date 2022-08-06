import { useState, useEffect } from "react";



export function CounterDisplay({ initialValue = 0 }) {

    const [count, setCount] = useState(initialValue)
    let [timer, setTimer] = useState(initialValue)
    const [show, setShow] = useState(false)

    function handleCounterIncrement() {
        setCount(count + Math.random())
    }

    function handleShowtimer() {
        setShow((s)=> !s)
    }


    useEffect(() => {
       const interval = setInterval(() => {
            setTimer(timer + Math.random())
        }, 1000);
        return () => clearInterval(interval);
    })
    
    useEffect(() => {
            setTimer((t)=> t= 0)
    },[show])



    function onCounterChange(x) {
        console.log(x)
    }

    useEffect(() => {
        onCounterChange(count)
    }, [count])

    return (
        <div>
            <h1> count: {count}</h1>
            <button onClick={handleCounterIncrement}>increment</button>
            <button onClick={handleShowtimer}>{show?"i don't like numbers":"random timer"}</button>
            {show && <h2>maybe a timer? {timer}</h2>}
        </div>)




}

/* 
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
} */