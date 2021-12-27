const { path } = require("@vuepress/utils");

module.exports = (options = {}, app) => ({
  define: {
    selector: options.selector || 'div[class*="language-"]',
    align: options.align || "bottom",
    color: options.color || "#3aa675",
    backgroundColor: options.backgroundColor || "#71cda3",
    backgroundTransition: options.backgroundTransition !== false,
    successText: options.successText || "Copied!",
    successTextColor: options.successTextColor || options.color || "#349469",
    staticIcon: options.staticIcon === true,
  },
  name: "@zhengqbbb/vuepress-plugin-clipboard",
  multiple: false,
  clientAppEnhanceFiles: path.resolve(__dirname, "./client.js"),
  clientAppSetupFiles: path.resolve(__dirname, "./clientAppSetup.js"),
});
