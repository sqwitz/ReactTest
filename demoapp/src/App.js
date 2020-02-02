import React, { useState,useEffect,useReducer } from 'react';
import './App.css';
import Chatbot from './chat/Chatbot';
import HookCounter5 from './components/HookCounter5';
import HookCounter4 from './components/HookCounter4';




function App() {
  return (
    <div>
      {/* <HookCounter5/> */}
      <Chatbot/>
      {/* <HookCounter4/> */}
    </div>
  )
}

export default App

