import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
});
