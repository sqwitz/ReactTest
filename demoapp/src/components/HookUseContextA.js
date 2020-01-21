import React,{useContext} from 'react'
import {CountContext} from '../App'
function HookUseContextA() {
    // const countContext = useContext(CountContext)
    return (
        <div>
            {/* Count A : {countContext.countState}
            <button onClick={()=> countContext.countDispatch('Increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={()=> countContext.countDispatch('Reset')}>Reset</button> */}
        </div>
    )
}

export default HookUseContextA
