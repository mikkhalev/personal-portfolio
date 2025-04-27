import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ThemeSchema} from "features/ThemeSwitcher/model/types/themeSchema";

const localTheme: string | null = localStorage.getItem('theme') || 'dark';
const initialState: ThemeSchema = {
    theme: localTheme == 'light' || localTheme == 'dark' ? localTheme : 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        }
    },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;