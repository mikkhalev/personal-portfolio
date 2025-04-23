import {StoreSchema} from "app/providers/StoreProvider";

export const getTheme = (state: StoreSchema) => state.theme?.theme;