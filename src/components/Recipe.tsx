
type RecipeProps = {
    recipeTitle: string,
    recipeImg: string,
}

export default function RecipeComponent(props: RecipeProps) {
    const { recipeTitle, recipeImg } = props;

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-4">{recipeTitle}</h1>
      <img 
        src={recipeImg} 
        alt="レシピの画像" 
        className="w-auto h-60"/>
    </div>
  )
}