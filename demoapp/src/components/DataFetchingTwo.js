import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
function DataFetchingTwo() {
    const initialState = {
        post: {},
        loading: true,
        error: ''
    }
    const reducer = (currentState, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return{
                    post : action.payload,
                    loading : false,
                    error : ''
                }
            case 'FETCH_FAIL':
                return{
                    post : {},
                    loading : false,
                    error : 'Something Went Wrong'
                }
            default : 
                return currentState
        }
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
            .then(response => {
                dispatch({type : 'FETCH_SUCCESS', payload : response.data})
            })
            .catch(() =>{
                dispatch({type : 'FETCH_FAIL'})
            })
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {
                state.loading ? 'Loading' : state.post.title
            }
            {
                state.error ? state.error : null
            }
        </div>
    )
}

export default DataFetchingTwo
