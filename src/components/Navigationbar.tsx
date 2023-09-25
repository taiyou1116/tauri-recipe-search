import ButtonComponent from "./Button";
import InputComponent from "./Input";

type NavigationProps = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  onGetRecipeData: (name: string) => void,
  materialName: string,
  setMaterialName: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavigationbarComponent(props: NavigationProps) {
  const { categoryName, setCategoryName, onGetRecipeData, materialName, setMaterialName } = props;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onGetRecipeData(categoryName);
  }

  return (
    <div className="p-5 bg-blue-100 shadow-lg relative flex items-center z-10">
      <h1 className="font-bold text-2xl absolute left-1/2 transform -translate-x-1/2">
        レシピ検索アプリ
      </h1>
      <form onSubmit={handleSubmit} className="ml-auto flex flex-row gap-2">
        <div>
          <p>カテゴリ</p>
          <InputComponent 
            placeholder="例: 中華"
            value={ categoryName }
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div>
          <p>材料</p>
          <InputComponent 
            placeholder="例: 肉 ピーマン"
            value={ materialName }
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <ButtonComponent 
          title="検索"
        />
        </div>
      </form>
    </div>
  );
}