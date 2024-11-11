import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {

  function onclockhandle(){
    alert ('Button Clicked')
  }

  const onClickHandle2 = () => {
    alert('This is button 02')
  }
  const addToFive = (num) =>{
    alert (num + 5)
  }
  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
      <h1>React core concept</h1>
      <button onClick={onclockhandle}>Click Me</button>
      <button onClick={onClickHandle2}>Button 02</button>
      <button onClick={() => {alert('This is third Button')}}>Third Button</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
