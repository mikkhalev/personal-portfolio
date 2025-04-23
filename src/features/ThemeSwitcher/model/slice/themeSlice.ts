import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ThemeSchema} from "features/ThemeSwitcher/model/types/themeSchema";

const initialState: ThemeSchema = {
    theme: 'dark',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        }
    },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;