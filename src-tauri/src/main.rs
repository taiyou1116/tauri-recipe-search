// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use dotenv;
use serde::{Deserialize, Serialize};

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    dotenv::dotenv().ok();
    let url = std::env::var("RECIPE_URL").unwrap();

    let response: ApiResponse = reqwest::get(url).await?.json().await?;

    for recipe in &response.result {
        println!("Recipe Title: {}", recipe.title);
    }

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}

#[derive(Debug, Serialize, Deserialize)]
struct Recipe {
    foodImageUrl: String,
    mediumImageUrl: String,
    nickname: String,
    pickup: i32,
    rank: String,
    recipeCost: String,
    recipeDescription: String,
    recipeId: i64,
    recipeIndication: String,
    recipeMaterial: Vec<String>,
    recipePublishday: String,
    #[serde(rename = "recipeTitle")]
    title: String,
    recipeUrl: String,
    shop: i32,
    smallImageUrl: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct ApiResponse {
    result: Vec<Recipe>,
}
