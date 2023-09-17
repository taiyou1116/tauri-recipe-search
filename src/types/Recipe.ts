// RustのResultDataに対応するTypeScriptの型
export type LargeCategory = {
  categoryId: string;
  categoryName: string;
  categoryUrl: string;
};

export type MediumCategory = {
  categoryId: number;
  categoryName: string;
  categoryUrl: string;
  parentCategoryId: string;
};

export type SmallCategory = {
  categoryId: number;
  categoryName: string;
  categoryUrl: string;
  parentCategoryId: string;
};

export type ResultData = {
  large: LargeCategory[];
  medium: MediumCategory[];
  small: SmallCategory[];
};