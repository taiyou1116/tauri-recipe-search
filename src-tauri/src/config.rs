use dotenv;

pub struct Config {
    pub category_url: String,
    pub recipe_url: String,
}
impl Config {
    pub fn new() -> Self {
        dotenv::dotenv().ok();
        let category_url = std::env::var("CATEGORY_URL").expect("CATEGORY_URL must be set");
        let recipe_url = std::env::var("RECIPE_URL").expect("RECIPE_URL must be set");
        Config {
            category_url: category_url,
            recipe_url: recipe_url,
        }
    }
}
