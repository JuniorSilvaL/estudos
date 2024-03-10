use anchor_lang::prelude::*;

#[error_code]
pub enum TriadError {
    #[msg("Invalid account")]
    InvalidAccount,

    #[msg("Unauthorized access")]
    Unauthorized,
}