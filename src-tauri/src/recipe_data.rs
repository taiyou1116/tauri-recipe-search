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
    pub categoryName: String,
    pub categoryUrl: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct MediumCategory {
    categoryId: i16,
    pub categoryName: String,
    pub categoryUrl: String,
    parentCategoryId: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SmallCategory {
    categoryId: i16,
    pub categoryName: String,
    pub categoryUrl: String,
    parentCategoryId: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Category {
    pub categoryId: String,
    pub categoryName: String,
}
