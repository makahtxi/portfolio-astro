import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import { loadEnv } from "vite";
const { SECRET_PASSWORD } = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]
});