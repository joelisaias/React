import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset}=useCounter(20);
    
    const increment2=()=>{
        increment(2);
    }
    const decrement2=()=>{
        decrement(5);
    }


    return (
        <>
        <h1>Counter  {state}</h1>
        <hr/>
        <button className='btn btn-primary' onClick={increment2}>
            +1
        </button>
        <button className='btn btn-warning' onClick={reset}>
            reset
        </button>
        <button className='btn btn-danger' onClick={decrement2}>
            -1
        </button>
      </>

  )
}
