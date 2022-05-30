import { defineClientConfig } from "@vuepress/client";
import CodeCopy from "./composables/CodeCopy.vue";
import { setupCopyCode } from "./composables/useCodeCopy";

import "./style/main.css";

export default defineClientConfig({
  enhance: ({ app }) => {
    // eslint-disable-next-line vue/match-component-file-name
    app.component("CodeCopy", CodeCopy);
  },
  setup: () => {
    setupCopyCode();
  }
});
