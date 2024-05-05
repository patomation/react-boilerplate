import React from 'react'
import './Center.css'

export function Center({ children }) {
  return (
    <div className="Center__parent">
      <div className="Center__child">
        {children}
      </div>
    </div>
  )
}
export default Center
