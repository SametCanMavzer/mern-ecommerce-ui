import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
		// Proxy configuration to handle CORS issues by redirecting /api requests to backend server
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});