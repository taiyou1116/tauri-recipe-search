use crate::{config, recipe_data};
use recipe_data::{ApiResponse, ResultData};

#[tauri::command(async)]
pub async fn get_recipe_data() -> Result<ResultData, String> {
    let config = config::Config::new();
    let response: ApiResponse = reqwest::get(config.url)
        .await
        .map_err(|e| e.to_string())?
        .json()
        .await
        .map_err(|e| e.to_string())?;

    Ok(response.result)
}
