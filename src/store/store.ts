import { create } from "zustand";
import { invoke } from "@tauri-apps/api";

import { State } from "../types/State";
import { Recipe } from "../types/Recipe";
import { Result } from "../types/Result";

export const useStore = create<State>((set, get) => ({
    recipeList: [],

    getRecipeList: async (categoryName: string) => {
        console.log(categoryName);

        const result: Result<Recipe[], string> = await invoke("get_category_data", { categoryName });
        if (typeof result === 'string') {
            console.log("Error: ");
            return;
        } 

        set({ recipeList: result })
    },
    selectRecipe: () => {

    },
}))