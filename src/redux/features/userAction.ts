import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../../api';

interface Props {
    email: string,
    password: any,
    error: any
}


export const userLogin: any = createAsyncThunk(
    'user/login',
    async ({ email, password }: Props, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(`${url}/auth/coach/login`,
                { email, password },
                config
            )
            // store user's token in local storage
            localStorage.setItem('userToken', data.userToken)
            return data;
            
        } catch (error: any) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
