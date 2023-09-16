// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod config;
mod recipe_data;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::send_recipe_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
