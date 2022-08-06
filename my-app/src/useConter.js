import { useState } from "react"

export function useCounter ({ initialValue = 0 }) {
    
    const [count, setCount] = useState(initialValue)

    function handleCounterIncrement() {
        setCount((c)=>c + Math.random())
    }
    function handleCounterDecrement() {
        setCount((c)=>c - Math.random())
    }
    function handleCounterReset() {
        setCount(initialValue)
    }

    return {
        counter: count,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}

