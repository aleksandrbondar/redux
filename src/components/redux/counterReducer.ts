/* eslint-disable no-case-declarations */
import actionTypes from "./actionTypes"
import { counterActionTypes, counterStateTypes } from "./types"

export const initialState: counterStateTypes = {
  count: 0,
  name: 'Alex',
  reset: false
}

export const counterReducer = (state: counterStateTypes = initialState, action: counterActionTypes): counterStateTypes => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 }
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 }
    case actionTypes.RESET:
      return { ...state, count: 0, reset: true }
    default:
      return state
  }
}