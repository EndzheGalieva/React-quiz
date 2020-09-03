import React from 'react'
import './Answeritem.css'

const AnswerItem = props => {
  return (
   <li 
   className="AnswerItem"
   >
    { props.answer.text }
   </li>
  )
}

export default AnswerItem