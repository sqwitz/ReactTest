import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    SecondCounter: 10
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value };
        case 'Decrement':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value };
        case 'Increment2':
            return { ...currentState, SecondCounter: currentState.SecondCounter + action.value };
        case 'Decrement2':
            return { ...currentState, SecondCounter: currentState.SecondCounter - action.value };
        case 'Reset':
            return initialState;
        default:
            return currentState;
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Count : {count.firstCounter}</div>
            <div>Second Count : {count.SecondCounter}</div>
            <button onClick={() => dispatch({ type: 'Increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'Decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'Increment', value: 5 })}>Increment 5 </button>
            <button onClick={() => dispatch({ type: 'Decrement', value: 5 })}>Decrement 5 </button>
            <div>
                <button onClick={() => dispatch({ type: 'Increment2', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'Decrement2', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'Increment2', value: 5 })}>Increment 5 </button>
                <button onClick={() => dispatch({ type: 'Decrement2', value: 5 })}>Decrement 5 </button>
            </div>
            <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
        </div>
    )
}

export default Counter2
