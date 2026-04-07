// import { Keypair, Connection, PublicKey } from '@solana/web3.js';

// const keypair = Keypair.generate();

// console.log(`This is your public key- ${keypair.publicKey}`);
// console.log(`This is your Private key- ${keypair.secretKey}`);

import { Connection, PublicKey } from "@solana/web3.js";
const connection = new Connection("https://api.devnet.solana.com");

const programId = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

const accountInfo = await connection.getAccountInfo(programId);

console.log(accountInfo);
