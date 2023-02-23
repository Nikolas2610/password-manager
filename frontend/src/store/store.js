import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './login/reducer/loginSlice'
import registerSlice from './register/reducer/registerSlicer'
import userSlice from './user/reducer/userSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice, 
    register: registerSlice, 
    user: userSlice
  },
})