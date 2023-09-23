use crate::{
    api_structs::{ApiResponseOfCategory, ApiResponseOfRecipe, Category, HasNameAndUrl, Recipe},
    config,
};
use tauri::Window;
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

// カテゴリーから魚カテゴリーをフィルタリングする
fn filter_fish_categories<T: HasNameAndUrl>(
    categories: &[T],
    category_name: &str,
) -> Vec<Category> {
    categories
        .iter()
        .filter(|c| c.category_name().contains(category_name))
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

// ApiresponseOfCategoryからCategoryへの変換
fn extract_categories_from_response(
    response: &ApiResponseOfCategory,
    category_name: &str,
) -> Vec<Category> {
    let mut categories = Vec::new();
    categories.extend(filter_fish_categories(
        &response.result.large,
        category_name,
    ));
    categories.extend(filter_fish_categories(
        &response.result.medium,
        category_name,
    ));
    categories.extend(filter_fish_categories(
        &response.result.small,
        category_name,
    ));
    categories
}

#[tauri::command(async)]
pub async fn get_category_data(category_name: String, window: Window) -> Result<(), String> {
    let (tx, mut rx) = mpsc::channel(32); // 32はバッファサイズ

    tokio::spawn(async move {
        let config = config::Config::new();
        let response: ApiResponseOfCategory = reqwest::get(&config.category_url)
            .await
            .unwrap()
            .json()
            .await
            .unwrap();

        let categories = extract_categories_from_response(&response, &category_name);

        for category in categories {
            let recipe_url = format!("{}{}", config.recipe_url, category.category_id);
            let response: ApiResponseOfRecipe = reqwest::get(&recipe_url)
                .await
                .unwrap()
                .json()
                .await
                .unwrap();

            // チャネルを通じてレシピを送信
            if let Err(_) = tx.send(response.result).await {
                println!("Receiver dropped");
                return;
            }

            // 1秒待機
            sleep(Duration::from_secs(1)).await;
        }
    });

    // メイン関数で受信と処理
    while let Some(recipes) = rx.recv().await {
        // ここで受信したレシピを処理
        println!("Received recipes: {:?}", recipes);
        let js_command = format!(
            "window.receiveRecipes({})",
            serde_json::to_string(&recipes).unwrap()
        );
        window.eval(&js_command).unwrap();
    }

    Ok(())
}
