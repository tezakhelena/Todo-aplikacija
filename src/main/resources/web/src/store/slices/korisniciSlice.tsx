import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Korisnik } from "../../types/types";

const initialState: Korisnik[] = [];

export const korisniciSlice = createSlice({
    name: 'korisnici',
    initialState,
    reducers: {
        addKorisnik: (state, action: PayloadAction<Omit<Korisnik, 'id'>>) => {
            const newId = state.length > 0 ? Math.max(...state.map(korisnik => korisnik.id)) + 1 : 1;
            state.push({
                id: newId,
                ...action.payload
            })
        },
        updateKorisnik: (state, action: PayloadAction<Korisnik>) => {
            const index = state.findIndex(korisnik => korisnik.id === action.payload.id);
            if(index !== -1){
                state[index] = action.payload;
            }
        },
        deleteKorisnik: (state, action: PayloadAction<number>) => {
            state = state.filter(korisnik => korisnik.id !== action.payload);
        }
    }
})

export const {addKorisnik, updateKorisnik, deleteKorisnik} = korisniciSlice.actions;
export default korisniciSlice.reducer;