<template>
  <p class="input leading-4 whitespace-pre" v-if="isShowInput">
    <span class="symbol font-extrabold text-green-500 text-2xl">></span>
    {{ inputText }}
  </p>
  <p v-if="isShowOutput" class="output font-semibold tracking-wide" v-html="outputText"></p>
</template>

<script>
import { reactive, toRefs, onMounted, onBeforeUnmount, watch } from "vue";

export default {
  props: {
    pageIndex: Number,
    activeIndex: Number,
    terminalInfo: Object,
  },
  setup(props) {
    const data = reactive({
      isShowInput: false,
      isShowOutput: false,
      inputVal: "",
      outputVal: "",
      start: () => {},
      write: () => {},
      clear: () => {},
      textTimer: null,
      index: 0,
      inputContain: [],
      inputText: "",
      outputText: "",
    });
    onMounted(() => {
      data.write = () => {
        if (data.index < data.inputContain.length) {
          data.inputText += data.inputContain[data.index++];
        } else {
          clearInterval(data.textTimer);
          data.outputText = data.outputVal;
        }
      };
      data.start = () => {
        data.isShowOutput = props.terminalInfo.type === 'output' 
          || props.terminalInfo.type === 'input-output';
        data.inputVal = props.terminalInfo.inputValue || '';
        data.outputVal = props.terminalInfo.outputValue || '';
        const delay = props.terminalInfo.delay || 0;
        clearInterval(data.textTimer);
        data.textTimer = null;
        setTimeout(() => {
          data.isShowInput = props.terminalInfo.type === 'input' 
            || props.terminalInfo.type === 'input-output';
          data.clear();
          data.inputContain = data.inputVal.split("");
          data.textTimer = setInterval(data.write, 50);
        }, delay)
      };
      data.clear = () => {
        data.inputContain = [];
        data.textTimer = null;
        data.index = 0;
        data.inputText = "";
        data.outputText = "";
      };
      if (props.pageIndex === 2) {
        data.start()
      }
    });
    watch(
      () => props.pageIndex,
      (val) => {
        if (val === 2) {
          setTimeout(() => {
            data.start();
          }, 500);
          return;
        }
        if (data.textTimer === null) return;
        data.textTimer = null;
        clearInterval(data.textTimer);
        data.clear();
        data.isShowInput = false;
        data.isShowOutput = false;
      }
    );
    watch(
      () => props.terminalInfo,
      (val) => {
        if (data.textTimer === null) return;
        clearInterval(data.textTimer);
        data.clear();
        data.inputVal = val.inputValue || '';
        data.outputVal = val.outputValue || '';
        data.isShowOutput = val.type === 'output' 
        || val.type === 'input-output';
        data.start();
      }
    )
    onBeforeUnmount(() => {
      if (data.textTimer === null) return;
      data.textTimer = null;
      clearInterval(data.textTimer);
      data.clear();
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
  background: var(--code-bg-color);
}
p {
  color: var(--c-brand-text);
}
</style>
