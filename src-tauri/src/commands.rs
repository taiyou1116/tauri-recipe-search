use crate::{
    api_structs::{ApiResponseOfCategory, ApiResponseOfRecipe, Category, HasNameAndUrl, Recipe},
    config,
};
use tokio::time::{sleep, Duration};

// カテゴリーから魚カテゴリーをフィルタリングする
fn filter_fish_categories<T: HasNameAndUrl>(categories: &[T]) -> Vec<Category> {
    categories
        .iter()
        .filter(|c| c.category_name().contains("魚"))
        .map(|c| Category {
            category_id: get_id_from_url(c.category_url()),
            category_name: c.category_name().to_string(),
        })
        .collect()
}

// categoryUrlからcategoryIdを作成
fn get_id_from_url(url: &str) -> String {
    url.rsplit('/').nth(1).unwrap_or_default().to_string()
}

// ApiResponceOfCategoryからCategoryへの変換
fn extract_categories_from_responce(responce: &ApiResponseOfCategory) -> Vec<Category> {
    let mut categories = Vec::new();
    categories.extend(filter_fish_categories(&responce.result.large));
    categories.extend(filter_fish_categories(&responce.result.medium));
    categories.extend(filter_fish_categories(&responce.result.small));
    categories
}

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

    let categories = extract_categories_from_responce(&response);

    let mut recipes: Vec<Recipe> = Vec::new();

    for category in categories {
        let recipe_url = format!("{}{}", config.recipe_url, category.category_id);
        let response: ApiResponseOfRecipe = reqwest::get(&recipe_url)
            .await
            .map_err(|e| e.to_string())?
            .json()
            .await
            .map_err(|e| e.to_string())?;

        recipes.extend(response.result);
        // 1秒待機(apiを受け取る間隔を開ける)
        sleep(Duration::from_secs(1)).await;
    }

    Ok(recipes)
}
