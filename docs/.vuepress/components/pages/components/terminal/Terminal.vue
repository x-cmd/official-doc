<template>
  <div class="terminal lg:w-1/2 md:w-3/4 w-5/6 p-3 rounded-xl text-xs md:text-base tracking-tight font-medium">
    <div class="title flex space-x-2">
      <span class="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
      <span class="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
      <span class="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
    </div>
    <TerminalLine
      v-for="(terminalInfoItem, index) in terminalInfos"
      :key="terminalInfoItem.key"
      :pageIndex="pageIndex"
      :terminalInfo="terminalInfoItem"
    />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import TerminalLine from "./TerminalLine.vue";

export default {
  props: {
    pageIndex: Number,
    activeIndex: Number,
    titleText: String,
    terminalInfos: Array,
  },
  components: {
    TerminalLine,
  },
  setup(props) {
    const data = reactive({
    });
    onMounted(() => {
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
.terminal {
  font-family: Menlo, "Courier New", courier, monospace;
  overflow-y: auto;
  max-height: 60%;
  background: var(--code-bg-color);
}
p {
  color: var(--c-brand-text);
}
</style>
