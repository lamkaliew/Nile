
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function Counter() {
  // Declare a state variable `count` with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
function DynamicHtwo(props){
  return (
<>
  <h4>{props.person}</h4>
  <p>Name: {props.person} <br/>Id: {props.id} <br/>Age: {props.age } <br/>{props.extra}</p>
  <Counter/>


</>)
}
function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <DynamicHtwo person="lam kaliew" id="2343" age="26"/>
        <DynamicHtwo person="Adung kaliew" id="2643" age="16" extra="whatever you like to add"/>
        <DynamicHtwo person="king kaliew" id="0343" age="46"/>
        <DynamicHtwo person="gwang kaliew" id="2393" age="06"/>
      </div>
    </>
  )
}

export default App
