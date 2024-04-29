
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from "../../apis/apiCient.js";


export const registerUser = createAsyncThunk(
    'auth/register',
    async (values, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await   axiosClient.post("/register",values,config)

            console.log(values);
        } catch (error) {

            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
