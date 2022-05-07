import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../02-useEfect/effects.css'
import { useForm } from '../../hooks/useForm';

export const Padre = () => {

    const numeros = [];
    const [valor, setValor] = useState(0);
    const [values,handleInputChange]=useForm({param:10});
    const {param}=values;
    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    for (let index = 1; index <= param; index++) {
        numeros.push(index)
        
    }

    const incrementar =useCallback(
        ( num ) => {
            setValor( (v)=> v + num )
        },
      [setValor],
    )
    


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>
            <input
             type='text'
             autoComplete='off'
             placeholder='Cantidad de botones'
             name='param'
             value={param}
             onChange={handleInputChange}
            />
            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
