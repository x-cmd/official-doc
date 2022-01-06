<template>
  <div class="terminal h-96 p-3 rounded-xl text-xs md:text-base tracking-tight font-medium">
    <div class="title flex space-x-2">
      <span class="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
      <span class="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
      <span class="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
    </div>
    <TerminalLine v-for="terminalInfoItem in terminalInfo" :key="terminalInfoItem.key" :page-index="2" :terminal-info="terminalInfoItem" />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { DEMO_INFO } from "../../../shared";
import TerminalLine from "./TerminalLine.vue";

export default {
  components: {
    TerminalLine
  },
  props: {
    docIndex: Number
  },
  setup(props) {
    const data = reactive({
      terminalInfo: null
    });
    onMounted(() => {
      data.terminalInfo = DEMO_INFO[props.docIndex].terminalInfo;
    });
    const refData = toRefs(data);
    return {
      ...refData
    };
  }
};
</script>

<style lang="scss" scoped>
.terminal {
  font-family: Menlo, "Courier New", courier, monospace;
  overflow-y: auto;
  background: var(--code-bg-color);
  box-shadow: var(--code-box-shadow);
}
footer {
  padding: 2.5rem;
  text-align: center;
}
.outbound {
  fill: var(--c-brand);
}
</style>
