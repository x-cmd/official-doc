const { path } = require("@vuepress/utils");

module.exports = (options = {}, app) => ({
  define: {
    selector: options.selector || 'div[class*="language-"]',
    align: options.align || "bottom",
    color: options.color || "#27b1ff",
    backgroundColor: options.backgroundColor || "#0075b8",
    backgroundTransition: options.backgroundTransition !== false,
    successText: options.successText || "Copied!",
    successTextColor: options.successTextColor || options.color || "#27b1ff",
    staticIcon: options.staticIcon === true,
  },
  name: "@zhengqbbb/vuepress-plugin-clipboard",
  multiple: false,
  clientAppEnhanceFiles: path.resolve(__dirname, "./client.js"),
  clientAppSetupFiles: path.resolve(__dirname, "./clientAppSetup.js"),
});