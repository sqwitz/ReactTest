import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    const [idFetchingButton, setIdFetchingButton] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFetchingButton}`)
        .then(res =>{
            setPost(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFetchingButton])

    const idButtonFetching = () =>{
        setIdFetchingButton(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={idButtonFetching}>Fetch Data</button>  
            {post.title}
            {/* <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching
