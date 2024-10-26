import React from 'react'

type SquareProps={
    value: string | null
    onClick:()=>void
}

const SquareButton = ({onClick,value}:SquareProps) => {
  return (
    <button type='button' onClick={onClick} style={{width:"100px",height:"100px"}}>
        {value}
    </button>
  )
}

export default SquareButton