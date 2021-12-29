import { path } from "@vuepress/utils";
import type { PluginConfig } from "vuepress";

const docSearchPlugin: PluginConfig = [
  "@vuepress/register-components",
  {
    components: {
      HomePage: path.resolve(__dirname, "../components/pages/HomePage.vue")
    }
  }
];

export default docSearchPlugin;
