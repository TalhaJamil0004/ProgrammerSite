import React from 'react'
import data from "./CardData"
import Card from "./Card"
import "../Forms/style.css"
let object = data.map(function(val){ return <Card key={val.image} value={val}/>})

export default function ReturningCardData(props) {
  return (
    <div className='row' style={props.style}>
      {object}
    </div>
  )
}
