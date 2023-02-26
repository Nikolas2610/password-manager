import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuth from "../../../utils/axios/axiosAuth";

export const fetchUserPasswords = createAsyncThunk('passwords/fetchUserPasswords',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosAuth.get('/get-user-password-data');
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })

export const addNewPassword = createAsyncThunk('passwords/addNewPassword',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosAuth.post('/password', data);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })

export const setErrors = createAction('passwords/setErrors', (errors) => {
    return {
        payload: {
            errors
        }
    }
})

export const toggleSubmit = createAction('passwords/toggleSubmit', (data) => {
    return {
        payload: {
            data
        }
    }
})

export const toggleModal = createAction('passwords/toggleModal', (data) => {
    return {
        payload: {
            data
        }
    }
})

export const toggleDeleteModal = createAction('passwords/toggleDeleteModal', (modal, id) => {
    return {
        payload: {
            id, modal
        }
    }
})

export const deletePassword = createAsyncThunk('passwords/deletePassword',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axiosAuth.delete('/password/' + id);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })

export const setValuesToModal = createAction('passwords/setValuesToModal', (data) => {
    return {
        payload: {
            data
        }
    }
})

export const updatePassword = createAsyncThunk('passwords/updatePassword',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosAuth.put('/password/' + data.id, data.item);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })

