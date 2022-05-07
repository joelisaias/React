import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
  console.log('Me volvi a generar :(')
  
    return (
    <button className='btn btn-success'
            onClick={()=>increment(5)}>
            +1
    </button>

  )
})
