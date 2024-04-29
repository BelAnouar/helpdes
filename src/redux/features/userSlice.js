import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../actions/registerActions.js";
import { userLogin } from "../actions/loginActions.js";
import axiosClient from "../../apis/apiCient.js";

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;


export const fetchUserInfo = createAsyncThunk(
    "userAuth/fetchUserInfo",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get("/authUser");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
};



const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload.user;
                state.userToken = payload.userToken;
                localStorage.setItem('userToken', payload.access_token);
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
            })
            .addCase(fetchUserInfo.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

    },
});
export const { logout } = userSlice.actions
export const selectUserInfo = (state) => state.userAuth.userInfo;

export default userSlice.reducer;
