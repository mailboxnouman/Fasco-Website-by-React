import React from 'react'
import '../components/btn.css'

function Btn(props) {
  return (
    <div className='btn'>
      <button>{props.btn}</button>
    </div>
  )
}

export default Btn
