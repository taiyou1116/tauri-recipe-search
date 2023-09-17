use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct ApiResponse {
    pub result: ResultData,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ResultData {
    pub large: Vec<LargeCategory>,
    pub medium: Vec<MediumCategory>,
    pub small: Vec<SmallCategory>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct LargeCategory {
    categoryId: String,
    categoryName: String,
    categoryUrl: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct MediumCategory {
    categoryId: i16,
    categoryName: String,
    categoryUrl: String,
    parentCategoryId: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SmallCategory {
    categoryId: i16,
    categoryName: String,
    categoryUrl: String,
    parentCategoryId: String,
}
