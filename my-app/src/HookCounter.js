import { useCounter } from "./useConter"

export function HookCounter ({initialValue=0}){
    const { counter, onIncrement, onDecrement, onReset}= useCounter(initialValue)


return (
    <div>
        <h1> Count: {counter}</h1>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onReset}>reset</button>
    </div>)
}