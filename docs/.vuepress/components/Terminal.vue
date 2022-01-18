<template>
  <div
    v-if="isTerminalVisible"
    :class="type"
    class="terminal"
    @mouseenter="clearSwiper"
    @mouseleave="startSwiper"
    @touchstart="clearSwiper"
  >
    <div class="switch-btns">
      <span class="switch-btn"></span>
      <span class="switch-btn"></span>
      <span class="switch-btn"></span>
      <RouterLink v-if="isHomeTerminal" class="switch-link" :to="infoLink">
        <VIcon title="more infomation" label="more infomation" name="morehoriz" />
      </RouterLink>
    </div>
    <TerminalCommand
      v-for="terminalCommand in terminalCommands"
      :key="terminalCommand.key"
      :terminal-command="terminalCommand"
    />
  </div>
  <TermianlButtonGroup
    v-if="isHomeTerminal"
    :active-index="activeIndex"
    :termianl-container="termianlContainer"
    @toggle-active="toggleActive"
  />
</template>

<script setup lang="ts">
import { isArray } from "@vuepress/shared";
import { computed, onBeforeUnmount, onMounted, ref, toRefs } from "vue";
import type { PropType } from "vue";
import { DEMO_INFO } from "./shared";
import type { TerminalCommandType, TerminalInfoType } from "./shared";
import TermianlButtonGroup from "./TermianlButtonGroup.vue";
import TerminalCommand from "./TerminalCommand.vue";

const props = defineProps({
  termIndex: {
    type: Number,
    default: -1
  },
  type: {
    type: String as PropType<"home-terminal" | "doc-terminal">,
    default: "doc-terminal"
  }
});
const { type, termIndex } = toRefs(props);
const activeIndex = ref(0);
const isTerminalVisible = ref(false);
const isHomeTerminal = ref(false);
const termianlContainer = ref<Array<TerminalInfoType>>([]);
const terminalCommands = ref<Array<TerminalCommandType>>([]);
const termianlSwiperTimer = ref<number | undefined>(undefined);
const infoLink = computed(() => {
  return DEMO_INFO[activeIndex.value].link;
});

const toggleActive = (index: number): void => {
  clearSwiper();
  activeIndex.value = index;
  terminalCommands.value = DEMO_INFO[activeIndex.value].terminalInfo;
  startSwiper();
};

const startSwiper = (): void => {
  clearSwiper();
  if (!isHomeTerminal.value || termianlContainer.value.length === 0) return;
  const nextActiveIndex =
    activeIndex.value + 1 === termianlContainer.value.length ? 0 : activeIndex.value + 1;
  termianlSwiperTimer.value = window.setTimeout(() => toggleActive(nextActiveIndex), 7000);
};

const clearSwiper = (): void => {
  if (!isHomeTerminal.value || termianlSwiperTimer.value === 0 || termianlSwiperTimer.value === undefined)
    return;
  window.clearTimeout(termianlSwiperTimer.value);
  termianlSwiperTimer.value = undefined;
};

onMounted(() => {
  if (type.value === "home-terminal") {
    termianlContainer.value = DEMO_INFO.filter((i) => i.isBanner);
    if (!isArray(termianlContainer.value[0].terminalInfo)) return;
    terminalCommands.value = termianlContainer.value[0].terminalInfo;
    isTerminalVisible.value = true;
    isHomeTerminal.value = true;
    startSwiper();
    return;
  }
  if (termIndex.value !== -1) activeIndex.value = termIndex.value;
  if (!isArray(DEMO_INFO[activeIndex.value].terminalInfo)) return;
  terminalCommands.value = DEMO_INFO[activeIndex.value].terminalInfo;
  isTerminalVisible.value = true;
});

onBeforeUnmount(() => {
  clearSwiper();
});
</script>
<style lang="scss" scoped></style>
