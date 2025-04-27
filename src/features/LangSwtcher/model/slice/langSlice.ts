import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LangSchema} from "../types/langSchema"

const localLanguage = localStorage.getItem('language') || 'en';
const initialState: LangSchema = {
    language: localLanguage,
}

const langSlice = createSlice({
    name: "langSlice",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            localStorage.setItem('language', state.language);
        }
    }
})

export const langActions = langSlice.actions;
export const langReducer = langSlice.reducer;