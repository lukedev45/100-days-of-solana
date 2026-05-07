import { createSolanaRpc, devnet, address } from "@solana/kit";

// Connect to devnet

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const targetAddress = address(
  "AZc48CPLxmdfqMk1hFnCy1pRjcdnFHo1suGNVVQNJgs4"
);

// Query the balance, just like calling a REST API
const { value: balanceInLamports } = await rpc
  .getBalance(targetAddress)
  .send();

const balanceInSol = Number(balanceInLamports) / 1_000_000_000;

console.log(`Address: ${targetAddress}`);
console.log(`Balance: ${balanceInSol}`);
