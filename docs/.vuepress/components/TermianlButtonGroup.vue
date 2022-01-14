<template>
  <div class="terminal-btn-group-container">
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
</script>
<style lang="scss" scoped></style>
