import React, { useState } from 'react'

function HookCounter4() {
    const [items, setItems] = useState([])
    const addNumber = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    const loopSetItem = () => {
        let listOfItems = []
        items.map(item => {
            listOfItems.push(
            <p key={item.id}>{item.value}</p>
        )})
        return(listOfItems)
    }
    return (
        <div>
            <button onClick={addNumber}>Add Number</button>
            <p>{JSON.stringify(items)}</p>
            {loopSetItem()}

            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter4
