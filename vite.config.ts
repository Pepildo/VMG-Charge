import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Keep the project's custom SSR error-handling server entry.
      server: { entry: "server" },
    }),
    nitro(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
