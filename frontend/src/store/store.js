import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './counterSlice'
import loginSlice from './login/reducer/loginSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginSlice
  },
})