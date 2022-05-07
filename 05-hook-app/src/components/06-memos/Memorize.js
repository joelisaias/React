import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';

import './memorize.css';
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment}=useCounter(10);
    const [show, setShow] = useState(true);

  return (
    <div>
        <h1>Memorize Counter  <Small value={counter}/></h1>
        <hr></hr>


        <button className='btn btn-warning'
                onClick={increment}>+1</button>
        <button className='btn btn-success'
                onClick={()=>setShow(!show)}>
            {show?'Show':'Hide'}
        </button>
    </div>
  )
}
