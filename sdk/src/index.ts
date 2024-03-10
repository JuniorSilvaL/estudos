import { Estudos, IDL } from "./types/estudos";
import {
  Connection,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { getUserPDA } from "./utils/helpers";
import { AnchorProvider, Program, Provider, Wallet } from "@coral-xyz/anchor";
import { encodeName, decodeName } from "./utils/name";
import { convertSecretKeyToKeypair } from "./utils/convert";

const PROGRAM_ID = "Cvij2CcV9yy2xg2rfodEELYS3nSGRp2bXwz8ZCMLXCGD";

export default class Triad {
  connection: Connection;
  wallet: Wallet;
  provider: Provider;
  program: Program<Estudos>;

  constructor(connection: Connection, wallet: Wallet) {
    this.connection = connection;
    this.wallet = wallet;
    this.provider = new AnchorProvider(
      this.connection,
      this.wallet,
      AnchorProvider.defaultOptions()
    );
    this.program = new Program(IDL, PROGRAM_ID, this.provider);
  }

  /**
   * Create a project
   *  @param name Project name
   */
  createUser = async ({ name }: { name: string }) => {
    const UserPDA = getUserPDA(this.wallet.publicKey, this.program.programId);

    const ix = await this.program.methods
      .createUser({
        name: encodeName(name),
      })
      .accounts({
        user: UserPDA,
        signer: this.wallet.publicKey,
      })
      .instruction();

    const { blockhash } = await this.connection.getLatestBlockhash();

    const message = new TransactionMessage({
      payerKey: this.wallet.publicKey,
      instructions: [ix],
      recentBlockhash: blockhash,
    }).compileToV0Message();

    const tx = new VersionedTransaction(message);

    const txSign = await this.wallet.signTransaction(tx);

    const signature = await this.connection.sendRawTransaction(
      txSign.serialize()
    );

    return signature;
  };

  getUser = async () => {
    const UserPDA = getUserPDA(this.wallet.publicKey, this.program.programId);

    const user = await this.program.account.user.fetch(UserPDA);

    return user;
  };
}
