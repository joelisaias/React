import React, { useCallback, useEffect, useState } from 'react'


import './memorize.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(10);

    // const increment=()=>{
    //     setCounter(counter+1);
    // }

const increment=useCallback(
  (num)=> {
    setCounter((c)=>c+num);
  },
  [setCounter],
)

    useEffect(()=>{
        console.log('cambio la funcion')
    },[increment])
    
  
  return (
    <div>
        <h1>useCallBack Hook</h1>
        <hr/>
        <h3>Counter: {counter}</h3>

        <ShowIncrement increment={increment} />

    </div>
  )
}
