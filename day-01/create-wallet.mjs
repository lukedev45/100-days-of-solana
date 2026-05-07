import {
  generateKeyPairSigner,
  createSolanaRpc,
  devnet,
  address,
} from "@solana/kit";

// GenerateKeyPair

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
console.log("Wallet address: AZc48CPLxmdfqMk1hFnCy1pRjcdnFHo1suGNVVQNJgs4\n");

console.log("\n--- Go to https://faucet.solana.com/ and airdrop SOL to this address ---");
console.log("--- Then run this script again with the same address to check the balance ---\n");

// Checking a specific address that is already funded
const { value: balance } = await rpc.getBalance(address("AZc48CPLxmdfqMk1hFnCy1pRjcdnFHo1suGNVVQNJgs4")).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);
