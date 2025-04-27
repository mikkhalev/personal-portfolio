import {StoreSchema} from "app/providers/StoreProvider";


export const getLang = (state: StoreSchema) => state.language?.language;