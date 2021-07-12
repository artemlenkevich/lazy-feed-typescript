import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    firstname: null as string | null,
    lastname: null as string | null,
    isAuth: false
}

interface ISignUpDataActionPayload {
    firstname: string
    lastname: string
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<ISignUpDataActionPayload>) => {
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.isAuth = true
        },
    }
})

export const { setAuthData } = authSlice.actions

export const authReducer = authSlice.reducer