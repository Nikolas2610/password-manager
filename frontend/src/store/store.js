import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './counterSlice'
import loginSlice from './login/reducer/loginSlice'
import registerSlice from './register/reducer/registerSlicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginSlice, 
    register: registerSlice
  },
})