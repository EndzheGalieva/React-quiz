import React from 'react'
import classes from './MenuToggle.css'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle,
    'fas'
  ]

  if (props.isOpen) {
   cls.push('fas fa-times ')
   cls.push(classes.open)  
  } else {
    cls.push('fas fa-bars ')
  }

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
     /> 
  )
}

export default MenuToggle