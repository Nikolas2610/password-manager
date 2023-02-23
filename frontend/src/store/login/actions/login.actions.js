import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../../utils/axios/axios";
import { setUserDetails } from "../../user/actions/user.actions";

export const loginAsync = createAsyncThunk(
    'login/loginAsync',
    async (data, thunkAPI) => {
        try {
            const response = await axiosClient.post('/login', data);
            thunkAPI.dispatch(setUserDetails(response.data))
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const setErrors = createAction('login/setErrors', (errors) => {
    return {
        payload: {
            errors
        }
    }
})

export const toggleSubmit = createAction('login/toggleSubmit', (data) => {
    return {
        payload: {
            data
        }
    }
})
