// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod api_structs;
mod commands;
mod config;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::get_category_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
