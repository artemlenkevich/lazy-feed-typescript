import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAuthData } from "./authSlice";

const initialState = {
    signUp: {
        isOpen: false
    },
    signIn: {
        isOpen: false
    }
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setSignUpIsOpen: (state, action: PayloadAction<boolean>) => {
            state.signUp.isOpen = action.payload
        },
        setSignInIsOpen: (state, action: PayloadAction<boolean>) => {
            state.signIn.isOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setAuthData, (state, action) => {
                state.signUp.isOpen = false
            })
    }
})

export const { setSignInIsOpen, setSignUpIsOpen } = modalsSlice.actions

export const modalsReducer = modalsSlice.reducer