import { useCallback, useState } from "react"

export function useCounter ({ initialValue = 0 }) {
    
    const [count, setCount] = useState(initialValue)

    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
        setCount((c)=>c + Math.random())
    }, [])
    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
        setCount((c)=>c - Math.random())
    }, [])
    const handleCounterReset = useCallback(function handleCounterReset() {
        setCount(initialValue)
    }, [initialValue])

    return {
        counter: count,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}

