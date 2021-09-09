// import logo from './logo.svg';
// import './App.css';
import React, {useState,useEffect} from 'react';
import randomcolor from "randomcolor";

function Counter() {
  const [couter, setcouter] = useState(0);
  const [color,setcolor] =useState("blue");

  useEffect(() => {
    console.log("useeffect");
    setcolor(randomcolor())

  }, [couter])
  const increment=()=>{
    setcouter(couter+1)
  
  }
  const decrement=()=>{
    setcouter(couter-1)
  }
  return (
    
    <div>
      {console.log("Rendering complete")}
      <h1 style={{color}}>{couter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
     
    </div>
  );
}

export default Counter;
