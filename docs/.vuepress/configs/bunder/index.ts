import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import type { Bundler } from "vuepress";

const isProd = process.env.NODE_ENV === "production";
export const bundler: Bundler =
  // process.env.DOCS_BUNDLER === "webpack"
  isProd
    ? webpackBundler({
        postcss: {
          postcssOptions: {
            plugins: [
              require("tailwindcss"),
              require("autoprefixer"),
              require("cssnano")({
                preset: "default"
              })
            ]
          }
        }
      })
    : viteBundler({
        viteOptions: {
          css: {
            postcss: {
              plugins: [require("tailwindcss"), require("autoprefixer")]
            }
          }
        }
      });
