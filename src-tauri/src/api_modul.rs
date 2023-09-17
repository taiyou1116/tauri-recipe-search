use serde::{Deserialize, Serialize};

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

#[derive(Serialize, Deserialize, Debug)]
pub struct MediumCategory {
    categoryId: i16,
    pub categoryName: String,
    pub categoryUrl: String,
    parentCategoryId: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SmallCategory {
    categoryId: i16,
    pub categoryName: String,
    pub categoryUrl: String,
    parentCategoryId: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Category {
    pub categoryId: String,
    pub categoryName: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ApiResponseOfRecipe {
    pub result: Vec<Recipe>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Recipe {
    pub foodImageUrl: String,
    pub mediumImageUrl: String,
    pub nickname: String,
    pub pickup: i8,
    pub rank: String,
    pub recipeCost: String,
    pub recipeDescription: String,
    pub recipeId: i32,
    pub recipeIndication: String,
    pub recipeMaterial: Vec<String>,
    pub recipePublishday: String,
    pub recipeTitle: String,
    pub recipeUrl: String,
    pub shop: i8,
    pub smallImageUrl: String,
}
