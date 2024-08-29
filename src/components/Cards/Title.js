import React from 'react'
import "../Forms/style.css"
export default function Title(props) {
  return (
    <div className='title'>
      <h1 className='mb-6 text-2xl font-semibold'>{props.name}</h1>
      <p className='mb-4'>{props.sub1}</p>
      <p className='mb-4'>{props.sub2}</p>
    </div>
  )
}
