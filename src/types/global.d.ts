import { Recipe } from "./Recipe";

declare global {
  interface Window {
    receiveRecipes: ((recipes: Recipe[]) => void) | null;
  }
}