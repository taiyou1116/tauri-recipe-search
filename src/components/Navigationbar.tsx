import ButtonComponent from "./Button";

type NavigationProps = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  onGetRecipeData: (name: string) => void,
}

export default function NavigationbarComponent(props: NavigationProps) {
  const { categoryName, setCategoryName, onGetRecipeData } = props;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onGetRecipeData(categoryName);
  }

  return (
    <div className="p-4 bg-blue-100 shadow-lg relative flex items-center z-10">
      <h1 className="font-bold text-2xl absolute left-1/2 transform -translate-x-1/2">
        レシピ検索アプリ
      </h1>
      <form onSubmit={handleSubmit} className="ml-auto flex flex-row gap-2 h-8">
        <input 
          type="text" 
          placeholder="キーワード入力" 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="border p-2 rounded-md 
                     focus:outline-none focus:ring focus:ring-blue-500
                     transition-shadow duration-200 shadow-md"
        />
        <ButtonComponent 
          title="検索"
        />
      </form>
    </div>
  );
}