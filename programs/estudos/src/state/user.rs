use anchor_lang::prelide::*;

#[account]
pub struct User {
    pub ts: i64,
    pub name: [u8; 32],
    pub bump: u8,
    pub authority: Pubkey,

}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct CreateUserArgs{
    pub name: [u8; 32]
}

impl User{

    pub const PREFIX_SEED: &[u8] =b"user";

    pub const SPACE: usize =
        8 +std::men::size_of::<Self>();
}