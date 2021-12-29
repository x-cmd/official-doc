<template>
  <footer
    class="text-center mt-2 p-9 text-gray-400 text-sm"
  >
   Copyright © 2020-2021 Li Junhao (l@x-cmd.com)
  </footer>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup(props) {
    const data = reactive({});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid var(--c-border);
}
</style>
