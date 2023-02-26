import { createSlice } from "@reduxjs/toolkit"
import { decrypt } from "../../../utils/encryption/decryptPassword";
import { addNewPasswordRules } from "../../../utils/validation/rules/addNewPassword";
import { validateObject } from "../../../utils/validation/validation";
import { addNewPassword, fetchUserPasswords, setErrors, setValuesToModal, toggleDeleteModal, toggleModal, toggleSubmit, updatePassword } from "../actions/passwords.actions"

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
        selectedPassword: null,
        backendErrors: null,
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
                state.modal.form.title = ''
                state.modal.form = {
                    title: '',
                    username: '',
                    password: '',
                    website: '',
                    notes: ''
                }
                state.modal.errors = null;
                state.modal.backendErrors = null;
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
                if (state.modal.selectedPassword) {
                    state.modal.form = {
                        title: '',
                        username: '',
                        password: '',
                        website: '',
                        notes: ''
                    }
                    state.modal.selectedPassword = null;
                }
                state.modal.isOpen = action.payload.data;
            })
            .addCase(toggleDeleteModal, (state, action) => {
                state.delete.isOpen = action.payload.modal;
                state.delete.deletedItem = action.payload.id;
            })
            .addCase(setValuesToModal, (state, action) => {
                state.modal.form = {
                    title: action.payload.data.title,
                    username: action.payload.data.username,
                    password: decrypt(
                        action.payload.data.password.encrypted_password,
                        action.payload.data.password.iv
                    ),
                    website: action.payload.data.website,
                    notes: action.payload.data.notes
                }
                state.modal.selectedPassword = action.payload.data.id
                state.modal.isOpen = true;
            })
            .addCase(updatePassword.pending, (state) => {
                state.modal.form.loading = true;
            })
            .addCase(updatePassword.rejected, (state) => {
                state.modal.form.loading = false;
            })
            .addCase(updatePassword.fulfilled, (state) => {
                state.modal.form.loading = false;
            })
    }
})

export const { onChangeValue } = passwordsSlice.actions

export default passwordsSlice.reducer