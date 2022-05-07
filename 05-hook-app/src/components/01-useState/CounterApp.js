import React, { useState } from 'react'

import './counter.css';

export const CounterApp = () => {
    const [state, setState] = useState({counter1:10,counter2:20});
    const {counter1,counter2} = state;
    

    const increment = ()=>{
        setState({
            ...state,
            counter1:counter1+1
        });

    };

    const decrement = ()=>{
        setState({
            ...state,
            counter2:counter2-1
        });

    };

    //aqui no funciona porque no tengo el initial state en ningun lado
    const reset = ()=>{
        setState(state);

    };


  return (
      <>
        <h1>Counter 1 {counter1}</h1>
        <h1>Counter 2 {counter2}</h1>
        <hr/>
        <button className='btn btn-primary' onClick={increment}>
            +1
        </button>
        <button className='btn btn-warning' onClick={reset}>
            reset
        </button>
        <button className='btn btn-danger' onClick={decrement}>
            -1
        </button>
      </>
  )
}
