import { getAssociatedTokenAddress } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";

async function main() {
  const address = await getAssociatedTokenAddress(
    new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), //usdc mint public key
    new PublicKey("7Mm5cmWGtb5G8qkiTTCj1a6SA3bKyQXo7vVuCCmjaKYd"), // this account does not have usdc
  );
  console.log(address.toBase58());
}

main();
