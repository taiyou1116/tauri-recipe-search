use crate::{
    api_modul::{self, ApiResponseOfRecipe},
    config,
};
use api_modul::{ApiResponseOfCategory, Category, Recipe};
use tokio::time::{sleep, Duration};

#[tauri::command(async)]
pub async fn get_category_data() -> Result<Vec<Recipe>, String> {
    let config = config::Config::new();
    let response: ApiResponseOfCategory = reqwest::get(&config.category_url)
        .await
        .map_err(|e| e.to_string())?
        .json()
        .await
        .map_err(|e| e.to_string())?;

    // キーワードにあったものだけを新しいCategory構造体に格納

    let mut categories: Vec<Category> = Vec::new();

    for large in &response.result.large {
        if large.categoryName.contains("魚") {
            categories.push(Category {
                categoryId: get_id_from_url(&large.categoryUrl),
                categoryName: large.categoryName.clone(),
            });
        }
    }
    for medium in &response.result.medium {
        if medium.categoryName.contains("魚") {
            categories.push(Category {
                categoryId: get_id_from_url(&medium.categoryUrl),
                categoryName: medium.categoryName.clone(),
            });
        }
    }
    for small in &response.result.small {
        if small.categoryName.contains("魚") {
            categories.push(Category {
                categoryId: get_id_from_url(&small.categoryUrl),
                categoryName: small.categoryName.clone(),
            });
        }
    }

    let mut recipes: Vec<Recipe> = Vec::new();

    // 原因categories...21, for...1
    for category in categories {
        let recipe_url = format!("{}{}", config.recipe_url, category.categoryId);
        let response: ApiResponseOfRecipe = reqwest::get(&recipe_url)
            .await
            .map_err(|e| e.to_string())?
            .json()
            .await
            .map_err(|e| e.to_string())?;

        recipes.extend(response.result);
        // 1秒待機
        sleep(Duration::from_secs(1)).await;
    }

    Ok(recipes)
}

fn get_id_from_url(url: &str) -> String {
    url.rsplit('/').nth(1).unwrap_or_default().to_string()
}
