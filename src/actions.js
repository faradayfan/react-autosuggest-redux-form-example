import { HANDLE_CHANGE } from './constants'


export const handleChange = value => {
  return {
    type: HANDLE_CHANGE,
    value: value
  }
}