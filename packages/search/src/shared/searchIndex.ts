// import type { PageData } from '@vuepress/shared'

// export interface SearchIndexItem
//   extends Pick<PageData, 'title' | 'headers' | 'path'> {
//   pathLocale: string
//   extraFields: string[]
// }

export interface SearchIndexItem {
  /**
   * page info using page info
   */
  title: string;
  /**
   * main search context
   */
  context: string;
  /**
   * path slug
   * @example 'description'
   */
  slug: string;
  /**
   * @example '/guide/index.html'
   */
  path: string;
  /**
   * @example '/zh'
   */
  pathLocale: string;
}

export type SearchIndex = SearchIndexItem[];
