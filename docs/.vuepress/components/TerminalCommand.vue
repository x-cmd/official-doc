<template>
  <p v-if="isShowInput" class="input leading-4 whitespace-pre">
    <span class="symbol font-extrabold text-green-500 text-xl">❯</span>
    {{ inputText }}
  </p>
  <p v-if="isShowOutput" class="output font-medium" v-html="outputText"></p>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, toRefs, watch } from "vue";
import type { PropType } from "vue";
import type { TerminalCommandType } from "./shared";

const props = defineProps({
  terminalCommand: {
    type: Object as PropType<TerminalCommandType>,
    required: true
  }
});
const { terminalCommand } = toRefs(props);
const isShowInput = ref(false);
const isShowOutput = ref(false);
const inputVal = ref("");
const outputVal = ref("");
const startTextingTimer = ref<number | undefined>(undefined);
const textTimer = ref<number | undefined>(undefined);
const index = ref(0);
const inputContain = ref<Array<string>>([]);
const inputText = ref("");
const outputText = ref("");

const write = (): void => {
  if (index.value < inputContain.value.length) {
    inputText.value += inputContain.value[index.value++];
  } else {
    window.clearInterval(textTimer.value);
    outputText.value = outputVal.value;
  }
};

const start = (): void => {
  isShowOutput.value =
    terminalCommand.value.type === "output" || terminalCommand.value.type === "input-output";
  inputVal.value = terminalCommand.value.inputValue || "";
  outputVal.value = terminalCommand.value.outputValue || "";
  const delay = terminalCommand.value.delay || 0;
  window.clearInterval(textTimer.value);
  window.clearTimeout(startTextingTimer.value);
  textTimer.value = undefined;
  startTextingTimer.value = undefined;
  startTextingTimer.value = window.setTimeout(() => {
    isShowInput.value =
      terminalCommand.value.type === "input" || terminalCommand.value.type === "input-output";
    clear();
    inputContain.value = inputVal.value.split("");
    textTimer.value = window.setInterval(write, 50);
  }, delay);
};

const clear = (): void => {
  inputContain.value = [];
  window.clearInterval(textTimer.value);
  window.clearTimeout(startTextingTimer.value);
  textTimer.value = undefined;
  startTextingTimer.value = undefined;
  index.value = 0;
  inputText.value = "";
  outputText.value = "";
};

onMounted(() => {
  start();
});

watch(
  () => terminalCommand.value,
  (val) => {
    window.clearInterval(textTimer.value);
    clear();
    inputVal.value = val.inputValue || "";
    outputVal.value = val.outputValue || "";
    isShowOutput.value = val.type === "output" || val.type === "input-output";
    start();
  }
);

onBeforeUnmount(() => {
  clear();
});
</script>
<style lang="scss" scoped></style>
