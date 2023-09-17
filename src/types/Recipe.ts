// RustのResultDataに対応するTypeScriptの型
export type Category = {
  categoryId: string;
  categoryName: string;
};

export type ResultData = {
  categories: Category[];
};