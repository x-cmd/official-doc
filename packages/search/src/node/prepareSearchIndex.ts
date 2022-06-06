import type { App } from "@vuepress/core";
import * as cheerio from "cheerio";
import type { SearchIndex, SearchIndexItem } from "../shared";
import type { SearchPluginOptions } from "./searchPlugin";

const HMR_CODE = `
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
`;

const genSearchIndexItem = (path: string, pathLocale: string): SearchIndexItem =>
  Object.assign({
    title: "",
    context: "",
    slug: "",
    path,
    pathLocale
  });

export const prepareSearchIndex = async ({
  app,
  isSearchable,
  getExtraFields
}: {
  app: App;
  isSearchable: Required<SearchPluginOptions>["isSearchable"];
  getExtraFields: Required<SearchPluginOptions>["getExtraFields"];
}): Promise<string> => {
  const searchIndex: SearchIndex = [];
  const pages = app.pages.filter(isSearchable);
  pages.forEach((page) => {
    const $ = cheerio.load(page.contentRendered);

    if ($(".x-desc").text() !== "") {
      const head = $(".x-desc").prev("h2");
      const result = genSearchIndexItem(page.path, page.pathLocale);
      result.title = `${page.title} - ${head.text() || ""}`;
      result.context = $(".x-desc").text();
      result.slug = head.children("a").attr("href") || "";
      searchIndex.push(result);
    }
    if ($("dl")) {
      const head = $("dl").prev("h2");
      $("dt").each((i, el) => {
        const result = genSearchIndexItem(page.path, page.pathLocale);
        result.title = `${page.title} - ${head.text() || ""}`;
        const dd = $(el).next("dd").text();
        result.context = `${page.title} ${$(el).text()} : ${dd}`;
        result.slug = head.children("a").attr("href") || "";
        searchIndex.push(result);
      });
    }
  });

  // search index file content
  let content = `\
export const searchIndex = ${JSON.stringify(searchIndex, null, 2)}
`;
  // inject HMR code
  if (app.env.isDev) {
    content += HMR_CODE;
  }

  return app.writeTemp("internal/searchIndex.js", content);
};
