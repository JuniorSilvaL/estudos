use anchor_lang::prelude::*;

use instructions::*;
use state::*;

mod errors;
mod instructions;
mod state;

declare_id!("GvgrvreWmPmCM1YhBAL8q3CUG3b4WDueZFzbFMyHqs6L");

#[program]
pub mod estudos {
    use super::*;

    pub fn create_user(ctx: Context<CreateUser>, args: CreateUserArgs) -> Result<()> {
        instructions::create_user(ctx, args)
    }
}

// #[derive(Accounts)]
// pub struct Initialize {}
