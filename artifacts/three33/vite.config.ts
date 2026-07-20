import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import type { Plugin, ViteDevServer } from "vite";

const CANDY_MACHINE_ID = "EV6FZEwQfr1NdJ9GZ4oSHRPDJZMYgpACCwQy6ipZFNPe";
const TOTAL_SUPPLY = 333;

function candyMachineApiPlugin(): Plugin {
  return {
    name: "candy-machine-api",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/api/candy-machine", async (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        try {
          const rpcRes = await fetch("https://api.mainnet-beta.solana.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 1,
              method: "getAccountInfo",
              params: [CANDY_MACHINE_ID, { encoding: "base64" }],
            }),
          });
          const json = (await rpcRes.json()) as {
            result?: { value?: { data?: string[] } };
          };
          const b64 = json?.result?.value?.data?.[0];
          if (!b64) {
            res.end(JSON.stringify({ itemsRedeemed: 0, remaining: TOTAL_SUPPLY }));
            return;
          }
          const buf = Buffer.from(b64, "base64");
          const lo = buf.readUInt32LE(112);
          const hi = buf.readUInt32LE(116);
          const itemsRedeemed = hi * 2 ** 32 + lo;
          res.end(
            JSON.stringify({
              itemsRedeemed,
              remaining: TOTAL_SUPPLY - itemsRedeemed,
              itemsAvailable: TOTAL_SUPPLY,
            }),
          );
        } catch (err) {
          console.error("[candy-machine-api]", err);
          res.end(JSON.stringify({ itemsRedeemed: 0, remaining: TOTAL_SUPPLY }));
        }
      });
    },
  };
}

const port = Number(process.env.PORT || 5173);
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    candyMachineApiPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
