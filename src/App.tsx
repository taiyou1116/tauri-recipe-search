import { useState } from "react";
import "./App.css";
import NavigationbarComponent from "./components/Navigationbar";
import { useStore } from "./store/store";

export default function App() {

  const [categoryName, setCategoryName] = useState("");

  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const recipeList = useStore((store) => store.recipeList);

  return (
    <div>
      <NavigationbarComponent />
      <input type="text" placeholder="input category name" onChange={(name) => setCategoryName(name.target.value)}/>
      <button onClick={() => onGetRecipeData(categoryName)}/>

      { recipeList.map((recipe) => (
        <div>
          <p> { recipe.recipeTitle } </p>
          <img src={recipe.foodImageUrl} alt="foodImage" />
        </div>
      ))}
    </div>
  )
}
