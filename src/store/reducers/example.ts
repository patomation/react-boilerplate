import { AnyAction } from 'redux'
import { BUTTON_CLICK_EXAMPLE } from '../actions'

const example = (
  state = 'initial value',
  action: AnyAction
): unknown => {
  const { type, payload } = action

  return (type === BUTTON_CLICK_EXAMPLE ? payload : state)
}
export default example
