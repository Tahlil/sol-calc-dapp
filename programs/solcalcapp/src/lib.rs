use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod solcalcdapp {
    use super::*;
    pub fn create(ctx: Context<Create>, init_message: String) -> ProgramResult {
        let calculator = &mut ctx.accounts.calculator;
        calculator.gteeting = init_message;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer=user, space=264)]
    pub calculator: Account<'info, Calculator>
    #[account(mut)]
    pub user: Signer<'info>
    pub system_program: Program<'info, System>
}

#[account]
pub struct Calculator{
    pub gteeting: String,
    pub result: i64,
    pub remaineder: i64
}

