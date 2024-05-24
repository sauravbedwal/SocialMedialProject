import React from 'react'
import "./style.css"
interface buttontype{
  title: string,
}

const Button = ({title}:buttontype) => {
  return (
    <div>
        <button className="btn">{title}</button>
    </div>
  )
}

export default Button;