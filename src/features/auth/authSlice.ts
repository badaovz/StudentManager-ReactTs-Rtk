import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface LoginPayload {
    userName: string,
    password: string
}

export interface initialStateType {
    isLoading: boolean,
    isLogin?: boolean,
    currentUser?: User
}

const initialState: initialStateType = {
    isLoading: false,
    isLogin: false,
    currentUser: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state, action: PayloadAction<LoginPayload>) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            console.log('loginSuccess')
            state.isLoading = false;
            state.isLogin = true;
            state.currentUser = action.payload;
        },
        loginFailed: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
        },
        logout: (state) => {
            state.isLogin = false;
            state.currentUser = undefined;
        }
    }
})

export const authAction = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;