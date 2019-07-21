export function asyncExample () {
  return (): { success: boolean } => {
    // Some async action
    return {
      success: true
    }
  }
}

// Works by using somewhere....
// dispatch(asyncExample()).then(result => {
//   console.log(result.success)
// })
