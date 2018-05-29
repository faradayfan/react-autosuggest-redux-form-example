
import { HANDLE_CHANGE } from './constants'

const initialState = {
}


export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        demoValue: action.value
      }
    default:
      return {
        ...state
      }
  }
}