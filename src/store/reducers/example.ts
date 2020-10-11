
const example = (
  state = 'initial value',
  action: {
    type: string,
    value: string
  }
): unknown => {
  return (action.type === 'EXAMPLE' ? action.value : state)
}
export default example

// "example" is our global state
//  we can access it with "connect()".
// Set new value like so
// dispatch({type: 'EXAMPLE', value: 'new value'})
