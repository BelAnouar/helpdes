import axiosClient from "../../apis/apiCient.js";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    'auth/login',
    async (values, { rejectWithValue }) => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axiosClient.post("/login",values,config)

            localStorage.setItem('userToken', data.access_token)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
