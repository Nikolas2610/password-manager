import { createSlice } from '@reduxjs/toolkit'
import { loginRules } from '../../../utils/validation/rules/login'
import { validateObject } from '../../../utils/validation/validation'
import { loginAsync, setErrors, toggleSubmit } from '../actions/login.actions';

const initialState = {
  form: {
    email: 'psillovits1@gmail.com',
    password: 'Nikolas-0',
  },
  submit: false,
  loading: false,
  errors: {}, 
  backendErrors: null
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
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginAsync.pending, (state) => {
      state.loading = true;
    })
      .addCase(loginAsync.fulfilled, (state) => {
        state.backendErrors = null;
        state.submit = false;
        state.loading = false;
        state.form.email = '';
        state.form.password = '';
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.backendErrors = action.payload || { error: action.error.message };
      })
      .addCase(setErrors, (state, action) => {
        state.errors = action.payload.errors;
      })
      .addCase(toggleSubmit, (state, action) => {
        state.submit = action.payload.data;
      })
  }
})

// Action creators are generated for each case reducer function
export const { onChangeValue, clearFormData, _login } = loginSlice.actions

export default loginSlice.reducer