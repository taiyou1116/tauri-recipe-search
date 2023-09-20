import { useState } from "react";

import RecipeComponent from "./Recipe";
import ModalComponent from "./Modal";
import RecipeDetailsComponent from "./RecipeDetails";
import { Recipe } from "../types/Recipe";


type RecipeListProps = {
    recipeList: Recipe[];
    selectedRecipe: Recipe | null,
    selectRecipe: (recipe: Recipe) => void,
}

export default function RecipeListComponent(props: RecipeListProps) {
    const { recipeList, selectedRecipe, selectRecipe } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(recipe: Recipe) {
      setIsModalOpen(true);
      selectRecipe(recipe);
    }

    function closeModal() {
      setIsModalOpen(false);
    }

  return (
    <div className="grid grid-cols-3 gap-4 h-[800px] overflow-y-auto">
      { recipeList.map((recipe) => (
        <div onClick={() => openModal(recipe)}>
          <RecipeComponent
            recipeTitle={ recipe.recipeTitle }
            recipeImg={ recipe.foodImageUrl }
          />
        </div>
      ))}
      
      <ModalComponent 
        // childrenにDetailを渡す
        children={<RecipeDetailsComponent recipe={selectedRecipe}/>}
        open={isModalOpen}
        onClose={() => closeModal()}
      />
    </div>
  )  
}