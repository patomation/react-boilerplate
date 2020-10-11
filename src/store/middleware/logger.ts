import { Action, Store } from 'redux'

const logger = (store: Store) => (next: (Action) => unknown) => (action: Action): unknown => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export default logger
