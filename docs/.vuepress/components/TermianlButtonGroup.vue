<template>
  <div class="terminal-btn-group-container">
    <div class="symbol green bold" @click="left">❮</div>
    <div class="terminal-btn-group">
      <button
        v-for="(demoInfo, index) in termianlContainer"
        :key="index"
        class="btn"
        :class="{ active: activeIndex === index }"
        @click="$emit('toggle-active', index)"
      >
        {{ demoInfo.textBtn }}
      </button>
    </div>
    <div class="symbol green bold" @click="right">❯</div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { TerminalInfoType } from "./shared";
defineEmits(["toggle-active"]);
defineProps({
  activeIndex: {
    type: Number,
    default: 0
  },
  termianlContainer: {
    type: Object as PropType<Array<TerminalInfoType>>,
    required: true
  }
});

const left = (): void => {
  document.querySelector<HTMLElement>(".terminal-btn-group")!.scrollTo({
    left: 0,
    behavior: "smooth"
  });
};

const right = (): void => {
  document.querySelector<HTMLElement>(".terminal-btn-group")!.scrollTo({
    left: getSiteWidth(),
    behavior: "smooth"
  });
};

const getSiteWidth = () => {
  const container = document.querySelector<HTMLElement>(".terminal-btn-group");
  return container ? container.offsetWidth : 0;
};
</script>
<style lang="scss" scoped></style>
