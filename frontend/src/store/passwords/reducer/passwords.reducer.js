import { createSlice } from "@reduxjs/toolkit"
import { addNewPasswordRules } from "../../../utils/validation/rules/addNewPassword";
import { validateObject } from "../../../utils/validation/validation";
import { addNewPassword, fetchUserPasswords, getPasswordById, setErrors, toggleDeleteModal, toggleModal, toggleSubmit } from "../actions/passwords.actions"

const initialState = {
    loading: false,
    passwords: [],
    modal: {
        form: {
            title: '',
            username: '',
            password: '',
            website: '',
            notes: ''
        },
        isOpen: false,
        loading: false,
        submit: false,
        errors: {},
        backendErrors: null, 
        encryptPassword: {
            encrypted_password: '',
            iv: '', 
            loading: false
        }
    }, 
    delete: { 
        deletedItem: null,
        isOpen: false,
        loading: false
    }
}

const rules = addNewPasswordRules;

export const passwordsSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {
        onChangeValue: (state, action) => {
            state.modal.form[action.payload.key] = action.payload.data;
            if (state.submit) {
              state.errors = validateObject(state.form, rules);
            }
          }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPasswords.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserPasswords.fulfilled, (state, action) => {
                state.passwords = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserPasswords.rejected, (state) => {
                state.loading = false;
            })
            .addCase(addNewPassword.pending, (state) => {
                state.modal.loading = true
            })
            .addCase(addNewPassword.fulfilled, (state) => {
                console.log("Created");
                state.modal.form.title = ''
                state.modal.form = {
                    title: '',
                    username: '',
                    password: '',
                    website: '',
                    notes: ''
                }
                state.modal.loading = false
            })
            .addCase(addNewPassword.rejected, (state) => {
                state.modal.loading = false
            })
            .addCase(setErrors, (state, action) => {
                state.modal.errors = action.payload.errors;
            })
            .addCase(toggleSubmit, (state, action) => {
                state.modal.submit = action.payload.data;
            })
            .addCase(toggleModal, (state, action) => {
                state.modal.isOpen = action.payload.data;
            })
            .addCase(toggleDeleteModal, (state, action) => {
                state.delete.isOpen = action.payload.modal;
                state.delete.deletedItem = action.payload.id;
            })
            .addCase(getPasswordById.pending, (state) => {
                state.passwords.loading = true;
            })
            .addCase(getPasswordById.fulfilled, (state, action) => {
                state.passwords.loading = false;
                state.passwords.encrypted_password = action.payload.encrypted_password;
                state.passwords.iv = action.payload.iv;
            })
            .addCase(getPasswordById.rejected, (state, action) => {
                state.passwords.loading = false;
            })
    }
})

export const { onChangeValue } = passwordsSlice.actions

export default passwordsSlice.reducer