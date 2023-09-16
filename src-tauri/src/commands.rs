use crate::{config, recipe_data};
use recipe_data::ApiResponse;

#[tauri::command(async)]
pub async fn send_recipe_data() -> Result<ApiResponse, String> {
    let config = config::Config::new();
    let response: ApiResponse = reqwest::get(config.url)
        .await
        .map_err(|e| e.to_string())?
        .json()
        .await
        .map_err(|e| e.to_string())?;

    for recipe in &response.result {
        println!("Recipe Title: {}", recipe.title);
    }

    Ok(response)
}
