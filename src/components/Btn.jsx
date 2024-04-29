import React from 'react'
import '../components/btn.css'

function Btn(props) {
  return (
    <div className={`btn ${props.className}`}>
      <button type={props.type} onClick={props.onClick}>{props.btn}</button>
    </div>
  )
}

export default Btn
