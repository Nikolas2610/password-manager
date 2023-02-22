import { createSlice } from '@reduxjs/toolkit'
import { loginRules } from '../../../utils/validation/rules/login'
import { validateObject } from '../../../utils/validation/validation'

const initialState = {
  form: {
    email: '',
    password: '',
  },
  submit: false,
  loading: false,
  errors: {}
}

const rules = loginRules;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearFormData: (state) => {
      state.form.email = '';
      state.form.password = '';
    },
    onChangeValue: (state, action) => {
      state.form[action.payload.key] = action.payload.data;
      if (state.submit) {
        state.errors = validateObject(state.form, rules);
      }
    },
    _login: (state, action) => {
      state.submit = true;
      state.errors = validateObject(state.form, rules);
      if (Object.keys(state.errors).length === 0) {
        // Axios login
        console.log('No errors found');
      } else {
        console.log('Errors found');
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChangeValue, clearFormData, _login } = loginSlice.actions

export default loginSlice.reducer