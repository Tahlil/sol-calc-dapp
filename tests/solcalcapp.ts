import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Solcalcapp } from "../target/types/solcalcapp";

describe("solcalcapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Solcalcapp as Program<Solcalcapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
