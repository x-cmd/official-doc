import { defineClientConfig } from "@vuepress/client";
import { setupCopyCode } from "./composables/codeCopy";
import CodeCopy from "./composables/CodeCopy.vue";

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
