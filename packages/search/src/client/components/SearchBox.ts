import { useRouteLocale } from "@vuepress/client";
import type { LocaleConfig } from "@vuepress/shared";
import { computed, defineComponent, h, ref, toRefs } from "vue";
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import type { HotKeyOptions } from "../../shared";
import {
  useHotKeys,
  useSearchIndex,
  useSearchSuggestions,
  useSuggestionsFocus
} from "../composables";
import { HightlightChar } from "./HightlightChar";

export type SearchBoxLocales = LocaleConfig<{
  placeholder: string;
}>;

export const SearchBox = defineComponent({
  name: "SearchBox",

  props: {
    locales: {
      type: Object as PropType<SearchBoxLocales>,
      required: false,
      default: () => ({})
    },

    hotKeys: {
      type: Array as PropType<(string | HotKeyOptions)[]>,
      required: false,
      default: () => []
    },

    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },

  setup(props) {
    const { locales, hotKeys, maxSuggestions } = toRefs(props);

    const router = useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex = useSearchIndex();

    const input = ref<HTMLInputElement | null>(null);
    const isActive = ref(false);
    const query = ref("");
    const locale = computed(() => locales.value[routeLocale.value] ?? {});

    const suggestions = useSearchSuggestions({
      searchIndex,
      routeLocale,
      query,
      maxSuggestions
    });

    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys });

    const showSuggestions = computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = (): void => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = (): void => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index: number): void => {
      if (!showSuggestions.value) {
        return;
      }

      const suggestion = suggestions.value[index];
      if (!suggestion) {
        return;
      }

      router.push(suggestion.item.path + suggestion.item.slug).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };

    return () =>
      h(
        "form",
        {
          class: "search-box",
          role: "search"
        },
        [
          h("input", {
            ref: input,
            type: "search",
            placeholder: locale.value.placeholder,
            autocomplete: "off",
            spellcheck: false,
            value: query.value,
            onFocus: () => (isActive.value = true),
            onBlur: () => (isActive.value = false),
            onInput: (event: any) => (query.value = event.target.value),
            onKeydown: (event: any) => {
              switch (event.key) {
                case "ArrowUp": {
                  onArrowUp();
                  break;
                }
                case "ArrowDown": {
                  onArrowDown();
                  break;
                }
                case "Enter": {
                  event.preventDefault();
                  goTo(focusIndex.value);
                  break;
                }
              }
            }
          }),
          showSuggestions.value &&
            h(
              "ul",
              {
                class: "suggestions",
                onMouseleave: () => (focusIndex.value = -1)
              },
              suggestions.value.map(({ item, positions }, index) =>
                h(
                  "li",
                  {
                    class: [
                      "suggestion",
                      {
                        focus: focusIndex.value === index
                      }
                    ],
                    onMouseenter: () => (focusIndex.value = index),
                    onMousedown: () => goTo(index)
                  },
                  [
                    h(
                      "span",
                      {
                        class: "page-title"
                      },
                      item.title
                    ),
                    h(
                      "a",
                      {
                        href: item.path + item.slug,
                        onClick: (event: any) => event.preventDefault()
                      },
                      [
                        h(HightlightChar, {
                          str: item.context,
                          indices: positions
                        })
                      ]
                    )
                  ]
                )
              )
            )
        ]
      );
  }
});
