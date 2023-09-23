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
    #[serde(rename = "categoryId")]
    category_id: String,
    #[serde(rename = "categoryName")]
    pub category_name: String,
    #[serde(rename = "categoryUrl")]
    pub category_url: String,
}
impl HasNameAndUrl for LargeCategory {
    fn category_name(&self) -> &str {
        &self.category_name
    }
    fn category_url(&self) -> &str {
        &self.category_url
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct MediumCategory {
    #[serde(rename = "categoryId")]
    category_id: i16,
    #[serde(rename = "categoryName")]
    pub category_name: String,
    #[serde(rename = "categoryUrl")]
    pub category_url: String,
    #[serde(rename = "parentCategoryId")]
    _parent_category_id: String,
}
impl HasNameAndUrl for MediumCategory {
    fn category_name(&self) -> &str {
        &self.category_name
    }
    fn category_url(&self) -> &str {
        &self.category_url
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SmallCategory {
    #[serde(rename = "categoryId")]
    category_id: i16,
    #[serde(rename = "categoryName")]
    pub category_name: String,
    #[serde(rename = "categoryUrl")]
    pub category_url: String,
    #[serde(rename = "parentCategoryId")]
    _parent_category_id: String,
}
impl HasNameAndUrl for SmallCategory {
    fn category_name(&self) -> &str {
        &self.category_name
    }
    fn category_url(&self) -> &str {
        &self.category_url
    }
}

//　3つのカテゴリ(Large, Medium, Small)を一つに統合
#[derive(Serialize, Deserialize, Debug)]
pub struct Category {
    #[serde(rename = "categoryId")]
    pub category_id: String,
    #[serde(rename = "categoryName")]
    pub category_name: String,
}

// 人気料理上位4品を受け取る
#[derive(Serialize, Deserialize, Debug)]
pub struct ApiResponseOfRecipe {
    pub result: Vec<Recipe>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Recipe {
    #[serde(rename = "foodImageUrl")]
    food_image_url: String,
    #[serde(rename = "mediumImageUrl")]
    medium_image_url: String,
    nickname: String,
    pickup: i8,
    rank: String,
    #[serde(rename = "recipeCost")]
    recipe_cost: String,
    #[serde(rename = "recipeDescription")]
    recipe_description: String,
    #[serde(rename = "recipeId")]
    pub recipe_id: i32,
    #[serde(rename = "recipeIndication")]
    recipe_indication: String,
    #[serde(rename = "recipeMaterial")]
    recipe_material: Vec<String>,
    #[serde(rename = "recipePublishday")]
    recipe_publishday: String,
    #[serde(rename = "recipeTitle")]
    recipe_title: String,
    #[serde(rename = "recipeUrl")]
    recipe_url: String,
    shop: i8,
    #[serde(rename = "smallImageUrl")]
    small_image_url: String,
}
