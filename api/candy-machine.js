const CANDY_MACHINE_ID = "EV6FZEwQfr1NdJ9GZ4oSHRPDJZMYgpACCwQy6ipZFNPe";
const SOLANA_RPC = "https://api.mainnet-beta.solana.com";
const TOTAL_SUPPLY = 333;

export default async function handler(_req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");

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

    const json = await response.json();
    const b64 = json?.result?.value?.data?.[0];
    if (!b64) {
      return res.status(200).json({
        itemsRedeemed: 0,
        itemsAvailable: TOTAL_SUPPLY,
        remaining: TOTAL_SUPPLY,
      });
    }

    const bytes = Buffer.from(b64, "base64");
    const lo = bytes.readUInt32LE(112);
    const hi = bytes.readUInt32LE(116);
    const itemsRedeemed = hi * 2 ** 32 + lo;

    return res.status(200).json({
      itemsRedeemed,
      itemsAvailable: TOTAL_SUPPLY,
      remaining: TOTAL_SUPPLY - itemsRedeemed,
    });
  } catch (err) {
    console.error("Candy Machine fetch error:", err);
    return res.status(500).json({ error: "Failed to fetch candy machine data" });
  }
}
