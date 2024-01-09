import React from 'react'

const Card = ({children,className}) => {
  return (
    <span className={`shadow w-[370.67px] h-[118px] p-[20px] gap-4 rounded-md flex flex-col ${className}`} >
        {children}

    </span>
  )
}

export default Card