
type RecipeProps = {
    recipeTitle: string,
    recipeImg: string,
}

export default function RecipeComponent(props: RecipeProps) {
    const { recipeTitle, recipeImg } = props;

  return (
    <div className="flex flex-col bg-slate-400 p-4 rounded">
      <h1 className="text-xl font-semibold mb-4">{recipeTitle}</h1>
      <div className="relative h-60">
        <img 
          src={recipeImg} 
          alt="レシピの画像" 
          className="absolute top-0 left-0 w-full h-full object-contain"/>
      </div>
    </div>
  )
}