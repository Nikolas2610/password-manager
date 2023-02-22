import { createSlice } from '@reduxjs/toolkit'
import { registerRules } from '../../../utils/validation/rules/registration'
import { validateObject } from '../../../utils/validation/validation'

const initialState = {
    form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    submit: false,
    loading: false, 
    errors: {}
}

const rules = registerRules;

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        clearFormData: (state) => {
            state.form.username = ''
            state.form.email = ''
            state.form.password = ''
            state.form.confirmPassword = ''
        },
        onChangeValue: (state, action) => {
            state.form[action.payload.key] = action.payload.data;
            if (state.submit) {
              state.errors = validateObject(state.form, rules);
            }
        }, 
        _register: (state) => {
            state.submit = true;
            state.loading = true;
            state.errors = validateObject(state.form, rules);
            if (Object.keys(state.errors).length === 0) {
              // Axios login
              console.log('No errors found');
            } else {
              console.log('Errors found');
            }
            state.loading = false;
          }
    },
})

// Action creators are generated for each case reducer function
export const { onChangeValue, clearFormData, _register } = registerSlice.actions

export default registerSlice.reducer