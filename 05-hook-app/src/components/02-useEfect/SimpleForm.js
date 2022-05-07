import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name:'',
        email:''
    });

    const {name,email}= formState;


    useEffect(()=>{
        // console.log('hola')
    },[]);

    useEffect(()=>{
        // console.log('formulario cambio')
    },[formState]);

    useEffect(()=>{
        // console.log('email cambio')
    },[email]);

    const handleInputChange=({target})=>{
        setformState({
            ...formState,
            [ target.name ]:target.value
        })
    }

  return (
      <>
      <h1>Use Effect</h1>
      <hr/>
      <div className='form-group'>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />

      </div>
      <div className='form-group'>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='email@mail.com'
            value={email}
            onChange={handleInputChange}
          />

      </div>
      {(name==='Joel')&&<Message name= {name}/>}
      </>
  )
}