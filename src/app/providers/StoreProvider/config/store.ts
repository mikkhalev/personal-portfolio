import {configureStore} from "@reduxjs/toolkit";
import {StoreSchema} from "app/providers/StoreProvider/config/storeSchema";
import {themeReducer} from "features/ThemeSwitcher/model/slice/themeSlice";

export function createReduxStore(initialState?: StoreSchema) {
    return configureStore({
        reducer: {
            theme: themeReducer
        },
        preloadedState: initialState
    })
}

