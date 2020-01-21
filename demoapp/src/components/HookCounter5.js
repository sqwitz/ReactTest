import React ,{useState,useEffect}from 'react'

function HookCounter5() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() =>{
        console.log("Hello")
        document.title = `You Click ${count} time`
    },[count])
    
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}> count : {count}</button>
        </div>
    )
}

export default HookCounter5
