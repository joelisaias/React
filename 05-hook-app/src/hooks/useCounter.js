import { useState } from "react";

export const useCounter = (initialState=10) => {

  const [counter,setCounter] = useState(initialState);
  

  const increment = ()=>{
    setCounter(counter+1);

  };

  const decrement = ()=>{
    setCounter(counter-1);

  };

  const incrementFactor = (factor=1)=>{
  setCounter(counter+factor);

};

const decrementFactor = (factor=1)=>{
  setCounter(counter-factor);

};

const reset = ()=>{
    setCounter(initialState);

  };


  return {
    counter,
    increment,
    decrement,
    reset
  }
}
