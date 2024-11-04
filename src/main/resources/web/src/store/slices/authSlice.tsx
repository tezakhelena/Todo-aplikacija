// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    korisnickoime?: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    korisnickoime: ""
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ token: string; korisnickoime: string }>) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.korisnickoime = action.payload.korisnickoime;
        },
        logout() {
            return initialState;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
