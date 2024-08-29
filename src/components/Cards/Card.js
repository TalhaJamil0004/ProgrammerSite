import React from 'react'
import Image from "./Image"
import Title from "./Title"
import Buttons from "./Buttons"
import Info from "./Info"
import Foot from "./Foot"
import "../Forms/style.css"

export default function Card(props) {
  return (
    <div className='cm'>
     <div className='card'>
      <Image img={props.value.image}/>
      <Title name={props.value.name} sub1={props.value.subtle1} sub2={props.value.subtle2}/>
      <Buttons/>
      <Info/>
      <Foot/>
     </div>
    </div>
  )
}
