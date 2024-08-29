import React from 'react'
import "../Forms/style.css"
// import progs from "../images/software-developer-6521720_1280.jpg"
export default function Image(props) {
  return (
    <div className='imgContainer'>
      < img src={props.img} className='image' alt=''/>
    </div>
  )
}
