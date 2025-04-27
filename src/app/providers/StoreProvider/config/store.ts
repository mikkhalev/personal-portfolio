import {configureStore} from "@reduxjs/toolkit";
import {StoreSchema} from "app/providers/StoreProvider/config/storeSchema";
import {themeReducer} from "features/ThemeSwitcher/model/slice/themeSlice";
import {langReducer} from "features/LangSwtcher/model/slice/langSlice";

export function createReduxStore(initialState?: StoreSchema) {
    return configureStore({
        reducer: {
            theme: themeReducer,
            language: langReducer
        },
        preloadedState: initialState
    })
}

