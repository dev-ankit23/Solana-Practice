import { Connection, Keypair } from "@solana/web3.js";

async function main() {
  const kp = Keypair.fromSecretKey(
    new Uint8Array([
      23, 187, 62, 123, 99, 138, 13, 26, 110, 134, 137, 161, 41, 135, 169, 85,
      18, 172, 119, 235, 56, 80, 175, 35, 137, 47, 76, 89, 19, 249, 122, 139,
      94, 119, 148, 37, 172, 106, 17, 53, 16, 79, 55, 50, 27, 174, 131, 188,
      153, 27, 111, 211, 47, 122, 210, 219, 246, 90, 5, 209, 218, 233, 23, 58,
    ]),
  );

  const connection = await new Connection(
    "https://devnet.helius-rpc.com/?api-key=46b23783-4a93-407d-af84-2435d4411fab",
  );
  const balance = await connection.getBalance(kp.publicKey);

  console.log("Balance is- " + balance);
}

main();
