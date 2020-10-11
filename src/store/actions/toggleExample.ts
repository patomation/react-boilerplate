import { Dispatch } from 'redux'

export function toggleExample () {
  return (dispatch: Dispatch, getState: { visible: boolean}): void => {
    dispatch({
      type: 'VISIBLE',
      value: !getState.visible
    })
  }
}
