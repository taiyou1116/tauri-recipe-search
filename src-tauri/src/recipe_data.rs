use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct ApiResponse {
    pub result: Vec<Recipe>,
}

#[derive(Serialize, Deserialize)]
pub struct Recipe {
    #[serde(rename = "foodImageUrl")]
    _food_image_url: String,
    #[serde(rename = "mediumImageUrl")]
    _medium_image_url: String,
    #[serde(rename = "nickname")]
    _nickname: String,
    #[serde(rename = "pickup")]
    _pickup: i32,
    #[serde(rename = "rank")]
    _rank: String,
    #[serde(rename = "recipeCost")]
    _recipe_cost: String,
    #[serde(rename = "recipeDescription")]
    _recipe_description: String,
    #[serde(rename = "recipeId")]
    _recipe_id: i64,
    #[serde(rename = "recipeIndication")]
    _recipe_indication: String,
    #[serde(rename = "recipeMaterial")]
    _recipe_material: Vec<String>,
    #[serde(rename = "recipePublishday")]
    _recipe_publishday: String,
    #[serde(rename = "recipeTitle")]
    _title: String,
    #[serde(rename = "recipeUrl")]
    _recipe_url: String,
    #[serde(rename = "shop")]
    _shop: i32,
    #[serde(rename = "smallImageUrl")]
    _small_image_url: String,
}
