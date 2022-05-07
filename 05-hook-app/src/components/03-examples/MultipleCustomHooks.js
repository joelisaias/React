import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './examples.css'

export const MultipleCustomHooks = () => {
    
    const {counter,increment}=useCounter(1);
    
    const url=`https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {loading,data}=useFetch(url);
    const {author,quote} =!!data && data[0];
    return (
      <div>
        <h1>Breaking Bad Quotes</h1>
        <hr></hr>
        {
            loading?
            (   <div className='alert alert-info text-center'>
                    Loading...
                </div>
            ):(
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'> {quote} </p>
                    <footer className='blockquote-footer'>{author}</footer>
        
                </blockquote>
            )

        }

        <button className='btn btn-primary' onClick={increment}>
            Siguiente quote
        </button>
 
      </div>
  )
}
