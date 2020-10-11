import { Dispatch } from 'redux'

export const toggleExample = () => {
  return (dispatch: Dispatch, getState: { visible: boolean}): void => {
    dispatch({
      type: 'VISIBLE',
      value: !getState.visible
    })
  }
}
