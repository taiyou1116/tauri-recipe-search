use crate::{config, recipe_data};
use recipe_data::{ApiResponse, Recipe};

#[tauri::command(async)]
pub async fn send_recipe_data() -> Result<Vec<Recipe>, String> {
    let config = config::Config::new();
    let response: ApiResponse = reqwest::get(config.url)
        .await
        .map_err(|e| e.to_string())?
        .json()
        .await
        .map_err(|e| e.to_string())?;

    Ok(response.result)
}
