import {
  Connection,
  Keypair,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");
const newAccount = Keypair.generate();
const mywallet = Keypair.fromSecretKey(
  new Uint8Array([
    23, 187, 62, 123, 99, 138, 13, 26, 110, 134, 137, 161, 41, 135, 169, 85, 18,
    172, 119, 235, 56, 80, 175, 35, 137, 47, 76, 89, 19, 249, 122, 139, 94, 119,
    148, 37, 172, 106, 17, 53, 16, 79, 55, 50, 27, 174, 131, 188, 153, 27, 111,
    211, 47, 122, 210, 219, 246, 90, 5, 209, 218, 233, 23, 58,
  ]),
);

const transaction1 = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: mywallet.publicKey,
    toPubkey: newAccount.publicKey,
    lamports: 0.1 * 1000_000_000,
  }),
);

const signature = await sendAndConfirmTransaction(connection, transaction1, [
  mywallet,
]);

console.log(signature);
