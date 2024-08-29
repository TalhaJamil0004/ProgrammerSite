import React from 'react'
import img1 from "../../images/Remove-bg.ai_1722498030858.png"
import img2 from "../../images/Remove-bg.ai_1722497837235.png"
import img3 from "../../images/Remove-bg.ai_1722497782252.png"
import "../Forms/style.css"
export default function Foot() {
  return (
    <div className='foot'>
      <img src={`${img1}`} style={{width:"50px", height:"35px"}}></img>
      <img src={`${img2}`} style={{width:"50px", height:"35px"}}></img>
      <img src={`${img3}`} style={{width:"50px", height:"35px"}}></img>
    </div>
  )
}
