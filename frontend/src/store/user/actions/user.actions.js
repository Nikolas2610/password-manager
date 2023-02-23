import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuth from "../../../utils/axios/axiosAuth";

export const setUserDetails = createAction('user/setUserDetails', (data) => {
    return {
        payload: {
            data
        }
    }
})

export const userLogged = createAsyncThunk('user/userLogged',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosAuth.get('/user');
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })

export const setToken = createAction('user/setToken', (data) => {
    return {
        payload: {
            data
        }
    }
})

export const userLogout = createAsyncThunk('user/userLogout',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosAuth.post('/logout');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })