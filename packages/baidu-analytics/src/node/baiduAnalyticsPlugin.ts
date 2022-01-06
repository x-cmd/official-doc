import type { Plugin, PluginObject } from "@vuepress/core";
import { logger, path } from "@vuepress/utils";

export interface BaiduAnalyticsPluginOptions {
  id: string;
}

export const baiduTongjiPlugin: Plugin<BaiduAnalyticsPluginOptions> = ({ id }, app) => {
  const plugin: PluginObject = {
    name: "@x-cmd/plugin-baidu-analytics"
  };

  if (!id) {
    logger.warn(`[${plugin.name}] 'id' is required`);
    return plugin;
  }

  if (app.env.isDev) {
    return plugin;
  }

  return {
    ...plugin,

    clientAppEnhanceFiles: path.resolve(__dirname, "../client/clientAppEnhance.js"),

    define: {
      __BA_ID__: id
    }
  };
};
