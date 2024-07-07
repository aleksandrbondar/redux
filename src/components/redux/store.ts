/* eslint-disable no-unused-labels */
import { Action, configureStore } from '@reduxjs/toolkit';
import { counterReducer, initialState } from './counterReducer';
import { counterActionTypes, counterStateTypes } from './types';


const store = configureStore(
  {
    reducer: {
      counterStorage: (state: counterStateTypes = initialState, action: Action) => {
        return counterReducer(state, action as counterActionTypes);
      },
      testStorage: () => { return { name: 'test', value: 1 } }
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false
      })
    }
  }
)

export default store
