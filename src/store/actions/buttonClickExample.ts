import { AnyAction } from 'redux'

export const BUTTON_CLICK_EXAMPLE = 'BUTTON_CLICK_EXAMPLE'

export const buttonClickExample = (value: string): AnyAction => ({
  type: BUTTON_CLICK_EXAMPLE,
  payload: 'New Value of what ever: ' + value
})
