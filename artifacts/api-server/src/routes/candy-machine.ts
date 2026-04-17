import { Router } from "express";

const router = Router();

const CANDY_MACHINE_ID = "EV6FZEwQfr1NdJ9GZ4oSHRPDJZMYgpACCwQy6ipZFNPe";
const SOLANA_RPC = "https://api.mainnet-beta.solana.com";
const TOTAL_SUPPLY = 333;

router.get("/candy-machine", async (_req, res) => {
  try {
    const response = await fetch(SOLANA_RPC, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getAccountInfo",
        params: [CANDY_MACHINE_ID, { encoding: "base64" }],
      }),
    });

    const json = (await response.json()) as {
      result?: { value?: { data?: string[] } };
    };

    const b64 = json?.result?.value?.data?.[0];
    if (!b64) {
      return res.json({ itemsRedeemed: 0, itemsAvailable: TOTAL_SUPPLY });
    }

    const bytes = Buffer.from(b64, "base64");
    // Candy Machine V3 layout (after 8-byte discriminator):
    // version(1) + token_standard(1) + features(6) + authority(32) + mint_authority(32) + collection_mint(32) = 104 bytes
    // itemsRedeemed at offset 8 + 104 = 112  (little-endian u64)
    const lo = bytes.readUInt32LE(112);
    const hi = bytes.readUInt32LE(116);
    const itemsRedeemed = hi * 2 ** 32 + lo;

    return res.json({
      itemsRedeemed,
      itemsAvailable: TOTAL_SUPPLY,
      remaining: TOTAL_SUPPLY - itemsRedeemed,
    });
  } catch (err) {
    console.error("Candy Machine fetch error:", err);
    return res.status(500).json({ error: "Failed to fetch candy machine data" });
  }
});

export default router;
