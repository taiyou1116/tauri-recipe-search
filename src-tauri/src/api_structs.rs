use serde::{Deserialize, Serialize};

pub trait HasNameAndUrl {
    fn category_name(&self) -> &str;
    fn category_url(&self) -> &str;
}

// カテゴリを受け取る
#[derive(Serialize, Deserialize, Debug)]
pub struct ApiResponseOfCategory {
    pub result: ResultCategory,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ResultCategory {
    pub large: Vec<LargeCategory>,
    pub medium: Vec<MediumCategory>,
    pub small: Vec<SmallCategory>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct LargeCategory {
    categoryId: String,
    pub categoryName: String,
    pub categoryUrl: String,
}
impl HasNameAndUrl for LargeCategory {
    fn category_name(&self) -> &str {
        &self.categoryName
    }
    fn category_url(&self) -> &str {
        &self.categoryUrl
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct MediumCategory {
    categoryId: i16,
    pub categoryName: String,
    pub categoryUrl: String,
    parentCategoryId: String,
}
impl HasNameAndUrl for MediumCategory {
    fn category_name(&self) -> &str {
        &self.categoryName
    }
    fn category_url(&self) -> &str {
        &self.categoryUrl
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SmallCategory {
    categoryId: i16,
    pub categoryName: String,
    pub categoryUrl: String,
    parentCategoryId: String,
}
impl HasNameAndUrl for SmallCategory {
    fn category_name(&self) -> &str {
        &self.categoryName
    }
    fn category_url(&self) -> &str {
        &self.categoryUrl
    }
}

//　3つのカテゴリ(Large, Medium, Small)を一つに統合
#[derive(Serialize, Deserialize, Debug)]
pub struct Category {
    pub categoryId: String,
    pub categoryName: String,
}

// 人気料理上位4品を受け取る
#[derive(Serialize, Deserialize, Debug)]
pub struct ApiResponseOfRecipe {
    pub result: Vec<Recipe>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Recipe {
    foodImageUrl: String,
    mediumImageUrl: String,
    nickname: String,
    pickup: i8,
    rank: String,
    recipeCost: String,
    recipeDescription: String,
    recipeId: i32,
    recipeIndication: String,
    recipeMaterial: Vec<String>,
    recipePublishday: String,
    recipeTitle: String,
    recipeUrl: String,
    shop: i8,
    smallImageUrl: String,
}
