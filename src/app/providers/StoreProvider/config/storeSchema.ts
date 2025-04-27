import {ThemeSchema} from "features/ThemeSwitcher/model/types/themeSchema";
import {LangSchema} from "features/LangSwtcher/model/types/langSchema";

export interface StoreSchema {
    theme: ThemeSchema,
    language: LangSchema
}