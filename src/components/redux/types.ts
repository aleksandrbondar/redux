import actionTypes from "./actionTypes"

export type counterStateTypes = {
  count: number
  name: string
  reset: boolean
}

export type counterActionTypes =
  { type: actionTypes.INCREMENT } |
  { type: actionTypes.DECREMENT } |
  { type: actionTypes.RESET }
