import React from 'react'
import { connect } from 'react-redux'

import {
  buttonClickExample
} from '../actions/'

// Connect redux state to props
export default connect((state) => {
  return {
    example: state.example
  }
}, {
  buttonClickExample
})((props) => {
  const { example } = props

  return (
    <div>
      <button onClick={() => {
        props.buttonClickExample('Nice')
      }}>

        {example}

      </button>
    </div>
  )
})
