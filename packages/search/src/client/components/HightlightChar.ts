import { computed, defineComponent, h, toRefs } from "vue";
import type { PropType } from "vue";

export const HightlightChar = defineComponent({
  name: "HightlightChar",

  props: {
    str: {
      type: String,
      required: false,
      default: ""
    },
    indices: {
      type: Object as PropType<Set<number>>,
      required: false,
      default: () => new Set()
    }
  },

  setup(props) {
    const { str, indices } = toRefs(props);
    const nodes = computed(() => {
      const strArr = str.value.split("");
      return strArr.map((v, i) => {
        if (indices.value.has(i)) {
          return h("mark", v);
        } else {
          return v;
        }
      });
    });
    return () =>
      h(
        "p",
        {
          class: "page-title"
        },
        nodes.value
      );
  }
});
