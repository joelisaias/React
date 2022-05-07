import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import './memorize.css';

export const MemoHook = () => {

    const {counter,increment}=useCounter(2000);
    const [show, setShow] = useState(true);


    const memoProcesoPesado=useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
        <h1>Memo Hook</h1>
        <h3>Counter: <small>{counter}</small></h3>
        <hr></hr>

        <p>{ memoProcesoPesado }</p>


        <button className='btn btn-warning'
                onClick={increment}>+1</button>
        <button className='btn btn-success'
                onClick={()=>setShow(!show)}>
            {show?'Show':'Hide'}
        </button>
    </div>
  )
}
