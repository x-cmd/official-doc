import type { Fzf, FzfResultItem } from "fzf";
import type { ComputedRef, Ref } from "vue";
import { computed, onMounted } from "vue";
import type { SearchIndex, SearchIndexItem } from "../../shared";

export type SearchSuggestion = FzfResultItem<SearchIndexItem>;

export const useSearchSuggestions = ({
  searchIndex,
  routeLocale,
  query,
  maxSuggestions
}: {
  searchIndex: Ref<SearchIndex>;
  routeLocale: Ref<string>;
  query: Ref<string>;
  maxSuggestions: Ref<number>;
}): ComputedRef<SearchSuggestion[]> => {
  // filter search index of current locale
  const localeSearchIndex = computed(() =>
    searchIndex.value.filter((item) => item.pathLocale === routeLocale.value)
  );
  let fzf: Fzf<SearchIndexItem[]>;
  const load = async (): Promise<void> => {
    const { Fzf } = await import("fzf");
    fzf = new Fzf(localeSearchIndex.value, {
      limit: 10,
      selector: (item) => item.context
    });
  };
  onMounted(load);

  // const parseSuggestions = (items: FzfResultItem<SearchIndexItem>) => {
  //   const result = [];

  // }

  return computed(() => {
    const searchStr = query.value.trim();
    if (!searchStr) return [];

    const suggestions: SearchSuggestion[] = fzf.find(searchStr);
    return suggestions;
  });
};
