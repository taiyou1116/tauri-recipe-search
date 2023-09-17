import { create } from "zustand";
import { invoke } from "@tauri-apps/api";

import { State } from "../types/State";
import { ResultData } from "../types/Recipe";
import { Result } from "../types/Result";

export const useStore = create<State>((set, get) => ({
    recipeList: [],

    getRecipeList: async () => {
        const result: Result<ResultData, string> = await invoke("get_recipe_data");
        if (typeof result === 'string') return;

        console.log(result.large.map((l) => l.categoryName));
        console.log(result.medium.map((m) => m.categoryName));
        console.log(result.small.map((s) => s.categoryName));
    },
    selectRecipe: () => {

    },
}))