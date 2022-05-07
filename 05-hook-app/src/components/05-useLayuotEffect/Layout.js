import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const Layout = () => {
    
    const {counter,increment}=useCounter(1);
    
    const url=`https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data}=useFetch(url);
    
    const {quote} =!!data && data[0];

    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();
    useLayoutEffect(() => {      
      setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    return (
      <div>
        <h1>Layout Effect</h1>
        <hr></hr>
        <blockquote className='blockquote text-right'>
            <p
            ref={pTag} 
            className='mb-0'> 
              {quote} 
            </p>
           
        </blockquote>
        <pre>
          {JSON.stringify(boxSize,null,3)}
        </pre>


        <button className='btn btn-primary' onClick={increment}>
            Siguiente quote
        </button>
 
      </div>
  )
}
