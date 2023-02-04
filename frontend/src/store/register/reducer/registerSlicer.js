import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    loading: false
}

export const registerSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        clearFormData: (state) => {
            state.username = ''
            state.email = ''
            state.password = ''
            state.confirmPassword = ''
        },
        onChangeValue: (state, action) => {
            state[action.payload.key] = action.payload.data;
        }
    },
})

// Action creators are generated for each case reducer function
export const { onChangeValue, clearFormData } = registerSlice.actions

export default registerSlice.reducer