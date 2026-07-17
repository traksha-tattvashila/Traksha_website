import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ command }): Promise<UserConfig> => {
  const isBuild = command === "build";

  // PORT is only required when running the dev/preview server, not during a
  // static build (e.g. `vite build` on Vercel). The server config is ignored
  // during builds, so the value is irrelevant in that context.
  const rawPort = process.env.PORT;
  let port: number | undefined;
  if (rawPort) {
    port = Number(rawPort);
    if (Number.isNaN(port) || port <= 0) {
      throw new Error(`Invalid PORT value: "${rawPort}"`);
    }
  } else if (!isBuild) {
    throw new Error(
      "PORT environment variable is required but was not provided.",
    );
  }

  // BASE_PATH defaults to "/" for production static deployments (e.g. Vercel
  // root deployment). When running locally, Replit injects BASE_PATH via the
  // artifact environment.
  const basePath = process.env.BASE_PATH ?? "/";

  return {
    base: basePath,
    css: {
      postcss: {
        plugins: [
          (await import("tailwindcss")).default,
          (await import("autoprefixer")).default,
        ],
      },
    },
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [
            await import("@replit/vite-plugin-cartographer").then((m) =>
              m.cartographer({
                root: path.resolve(import.meta.dirname, ".."),
              }),
            ),
            await import("@replit/vite-plugin-dev-banner").then((m) =>
              m.devBanner(),
            ),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(
          import.meta.dirname,
          "..",
          "..",
          "attached_assets",
        ),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      ...(port !== undefined ? { port, strictPort: true } : {}),
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
    preview: {
      ...(port !== undefined ? { port } : {}),
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
