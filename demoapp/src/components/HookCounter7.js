import React,{useState} from 'react'
import HookCounter6 from './HookCounter6'

function HookCounter7() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>toggle</button>
            {display && <HookCounter6/>}
        </div>
    )
}

export default HookCounter7
