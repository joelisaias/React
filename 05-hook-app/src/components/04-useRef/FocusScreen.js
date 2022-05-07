import React, { useRef } from 'react'
import '../03-examples/examples.css';
export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick=()=>{
    inputRef.current.select();
  }
  return (
      <>
        <h1>FocusScreen</h1>
        <hr/>
        <input
          ref={inputRef}
          className='form-control'
          placeholder='Su Nombre'
        />

        <button className='btn btn-outline-primary mt-5'
                onClick={handleClick}>
          Focus
        </button>

      </>
  )
}
