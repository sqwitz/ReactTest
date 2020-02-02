import React, { useState, useEffect } from 'react'
import StyleChatbot from "./StyleChatbot.css"

function Chatbot() {
    const [date, setDate] = useState(new Date());
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('Me')

    const ClickPost = () => {
        setDate(new Date());
        setPosts([...posts, {
            id: posts.length,
            name: name,
            value: message,
            time: date.toLocaleTimeString()
        }])
        setMessage('');
    }

    const loopForPosts = () => {
        let listOfPosts = [];
        posts.map(post => {
            listOfPosts.push(
                <div key={post.id} className="MessageMe">
                    <p id="send">{post.name}</p>
                    <p className="color">{post.value}</p>
                    <p>{post.time}</p>
                </div>
            )
        })
        return (listOfPosts);
    }
    return (

        <div>
            {loopForPosts()}
            <div className="inputMessage">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Input Message" />
                <button onClick={ClickPost}>Enter</button>
            </div>

        </div>


    )
}
export default Chatbot
