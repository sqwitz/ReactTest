import React, { useState,useEffect,useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import HookCounter6 from './components/HookCounter6';
import HookCounter7 from './components/HookCounter7';
import HookIntervalCounter from './components/HookIntervalCounter';
import DataFetching from './components/DataFetching';
import HookUseContextA from './components/HookUseContextA';
import HookUseContextB from './components/HookUseContextB';
import HookUseContextC from './components/HookUseContextC';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import axios from 'axios'
import DataFetchingTwo from './components/DataFetchingTwo';

// export const CountContext = React.createContext()
// const initialState = 0
// const reducer = (currentState, action) => {
//   switch (action) {
//     case 'Increment':
//       return currentState + 1;
//     case 'Decrement':
//       return currentState - 1;
//     case 'Reset':
//       return initialState;
//     default:
//       return currentState;
//   }
// }


function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <DataFetchingTwo/>
    </div>
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    //   <div className="App">
    //     <HookUseContextA/>
    //     <HookUseContextB/>
    //     <HookUseContextC/>
    //   </div>
    // </CountContext.Provider>
  )
}

export default App

