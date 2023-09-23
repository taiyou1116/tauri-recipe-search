
type NavigationProps = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  onGetRecipeData: (name: string) => void,
}

export default function NavigationbarComponent(props: NavigationProps) {
  const { categoryName, setCategoryName, onGetRecipeData } = props;

  function handleSubmit(e: React.FormEvent) {
    console.log("a");
    e.preventDefault();
    onGetRecipeData(categoryName);
  }

  return (
    <div className="p-4 bg-blue-100 shadow-lg">
      <h1 className="font-bold text-center text-2xl mb-4"></h1>
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 h-8 justify-end">
        <input 
          type="text" 
          placeholder="input category name" 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="border p-2 rounded-md 
                     focus:outline-none focus:ring focus:ring-blue-500
                     transition-shadow duration-200 shadow-md"
        />
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md 
                       transition-all duration-200 shadow-lg active:translate-y-1 active:shadow-none
                       flex items-center justify-center"
        >
          検索
        </button>
      </form>
      
    </div>
  );
}