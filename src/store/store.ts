import { create } from "zustand";
import { invoke } from "@tauri-apps/api";

import { State } from "../types/State";
import { Recipe } from "../types/Recipe";
import { Result } from "../types/Result";

export const useStore = create<State>((set, get) => ({
    recipeList: [],

    getRecipeList: async () => {
        const result: Result<Recipe[], string> = await invoke("send_recipe_data");
        if (typeof result === 'string') return;

        console.log(result);
        console.log(result.map((recipe) => recipe.recipeTitle));
        console.log(result.map((recipe) => recipe.foodImageUrl));

        set({ recipeList: result })
    },
    selectRecipe: () => {

    },
}))