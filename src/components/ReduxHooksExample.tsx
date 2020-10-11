import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  buttonClickExample
} from '../store/actions'

export const Button = (): ReactElement => {
  // const { example } = props
  const example = useSelector(s => s.example)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => {
        dispatch(buttonClickExample('Nice'))
      }}>

        {example}

      </button>
    </div>
  )
}
