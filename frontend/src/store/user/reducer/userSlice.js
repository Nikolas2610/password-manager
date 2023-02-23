import { createSlice } from "@reduxjs/toolkit"
import { setToken, setUserDetails, userLogged, userLogout } from "../actions/user.actions";


const initialState = {
    user: {
        id: null,
        name: '',
        email: '',
        token: '',
    },
    loading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(setUserDetails, (state, action) => {
                if (action.payload.data.token) {
                    state.user.token = action.payload.data.token
                    localStorage.setItem('token', state.user.token)
                }
                state.user.id = action.payload.data.user.id
                state.user.email = action.payload.data.user.email
                state.user.name = action.payload.data.user.name
            })
            .addCase(setToken, (state, action) => {
                state.user.token = action.payload.data
            })
            .addCase(userLogged.fulfilled, (state, action) => {
                state.loading = false
                state.user.id = action.payload.id
                state.user.email = action.payload.email
                state.user.name = action.payload.name
                state.user.token = localStorage.getItem('token');
            })
            .addCase(userLogged.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogged.rejected, (state) => {
                state.loading = false;
            })
            .addCase(userLogout.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogout.fulfilled, (state) => {
                state.user.email = '';
                state.user.name = '';
                state.user.token = '';
                state.user.id = '';
                localStorage.clear('token')
                state.loading = false;
            })
            .addCase(userLogout.rejected, (state) => {
                state.loading = false;
            })
    }
});

// Return if user is login
export const selectUser = state => (!!state.user.user.token && !!state.user.user.id);

export default userSlice.reducer