import { create } from "zustand";
import { invoke } from "@tauri-apps/api";

import { State } from "../types/State";
import { Category } from "../types/Recipe";
import { Result } from "../types/Result";

export const useStore = create<State>((set, get) => ({
    recipeList: [],

    getRecipeList: async () => {
        const result: Result<Category[], string> = await invoke("get_category_data");
        if (typeof result === 'string') return;

        console.log(result.map((c) => c.categoryName));
        console.log(result.map((c) => c.categoryId));
    },
    selectRecipe: () => {

    },
}))