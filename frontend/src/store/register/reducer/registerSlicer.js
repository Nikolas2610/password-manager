import { createSlice } from '@reduxjs/toolkit'
import { registerRules } from '../../../utils/validation/rules/registration'
import { validateObject } from '../../../utils/validation/validation'
import { registerAsync, setErrors, toggleSubmit } from '../actions/register.actions';

const initialState = {
  form: {
    name: 'nikolas',
    email: 'psillovits1@gmail.com',
    password: 'Nikolas-0',
    password_confirmation: 'Nikolas-0',
  },
  submit: false,
  loading: false,
  errors: {},
  backendErrors: null
}

const rules = registerRules;

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    clearFormData: (state) => {
      state.form.name = ''
      state.form.email = ''
      state.form.password = ''
      state.form.password_confirmation = ''
    },
    onChangeValue: (state, action) => {
      state.form[action.payload.key] = action.payload.data;
      if (state.submit) {
        state.errors = validateObject(state.form, rules);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.submit = false
        state.backendErrors = null
        state.loading = false;
        state.form.name = ''
        state.form.email = ''
        state.form.password = ''
        state.form.password_confirmation = ''
      })
      .addCase(registerAsync.rejected, (state, action) => {
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
export const { onChangeValue, clearFormData } = registerSlice.actions

export default registerSlice.reducer