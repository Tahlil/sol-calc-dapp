const assert = require('assert')
const anchor = require('@project-serum/anchor')

const { SystemProgram } = anchor.web3

describe('calcdapp', () => {
    const provider = anchor.Provider.local();
    anchor.setProvider(provider)
    const calculator = anchor.web3.Keypair.generate();
    const program = anchor.workspace.solcalcdapp

    it('Creates a calculate', async() => {
        await program.rpc.create("Welcome", {
            accounts: {
                calculator: calculator.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId
            },
            signers: [calculator]
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.greeting === "Welcome")
    })
})