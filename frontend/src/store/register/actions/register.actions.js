import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../../utils/axios/axios";
import { setUserDetails } from "../../user/actions/user.actions";

export const registerAsync = createAsyncThunk('register/registerAsync', async (data, { dispatch, rejectWithValue }) => {
    try {
        const response = await axiosClient.post('/register', data);
        dispatch(setUserDetails(response.data))
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const setErrors = createAction('register/setErrors', (errors) => {
    return {
        payload: {
            errors
        }
    }
})

export const toggleSubmit = createAction('register/toggleSubmit', (data) => {
    return {
        payload: {
            data
        }
    }
})