use crate::{config, recipe_data};
use recipe_data::{ApiResponse, Category};

#[tauri::command(async)]
pub async fn get_category_data() -> Result<Vec<Category>, String> {
    let config = config::Config::new();
    let response: ApiResponse = reqwest::get(config.url)
        .await
        .map_err(|e| e.to_string())?
        .json()
        .await
        .map_err(|e| e.to_string())?;

    // ここまでで全てのCategoryのデータを取得
    // そこからキーワードにあったものだけを新しいCategory構造体に格納

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

    Ok(categories)
}

fn get_id_from_url(url: &str) -> String {
    url.rsplit('/').nth(1).unwrap_or_default().to_string()
}
