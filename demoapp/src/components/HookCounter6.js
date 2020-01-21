import React,{useState,useEffect}from 'react'

function HookCounter6() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const lockMousemove = e =>{
        console.log("Hello")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("World")
        window.addEventListener('mousemove',lockMousemove)
        
        return () =>{
            window.removeEventListener('mousemove',lockMousemove)
        }
    },[])
    return (
        <div>
            Hook - x {x} y - {y}
        </div>
    )
}

export default HookCounter6
