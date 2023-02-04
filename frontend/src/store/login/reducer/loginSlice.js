import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  loading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearFormData: (state) => {
        state.email = ''
        state.password = ''
    },
    onChangeValue: (state, action) => {
        state[action.payload.key] = action.payload.data;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChangeValue, clearFormData } = loginSlice.actions

export default loginSlice.reducer