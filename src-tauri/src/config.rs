use dotenv;

pub struct Config {
    pub url: String,
}
impl Config {
    pub fn new() -> Self {
        dotenv::dotenv().ok();
        let url = std::env::var("RECIPE_URL").expect("RECIPE_URL must be set");
        Config { url: url }
    }
}
