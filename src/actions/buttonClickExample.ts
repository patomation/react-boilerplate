import { Dispatch } from 'redux'

export function buttonClickExample (value: string) {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: 'EXAMPLE',
      value: 'New Value of what ever: ' + value
    })
  }
}
