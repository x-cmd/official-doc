<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center cursor-pointer" @click="$emit('next')">
      <h4 class="text-sm md:text-base">{{iconText}}</h4>
    <svg class="sign w-6 h-6 animate-bounce" t="1628140939621" viewBox="0 0 1137 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13226" width="200" height="200"><path d="M1048.943259 469.000834a55.285373 55.285373 0 0 1 73.372563 0 44.819829 44.819829 0 0 1 0 67.3435L605.522716 1010.023949a55.285373 55.285373 0 0 1-73.486319 0L15.243292 536.344334a44.819829 44.819829 0 0 1 0-67.3435 55.285373 55.285373 0 0 1 73.372563 0L568.779557 909.122455l480.163702-440.121621z m0-455.023645a55.285373 55.285373 0 0 1 73.372563 0 44.819829 44.819829 0 0 1 0 67.343499L605.522716 555.000303a55.285373 55.285373 0 0 1-73.486319 0L15.243292 81.320688a44.819829 44.819829 0 0 1 0-67.343499 55.285373 55.285373 0 0 1 73.372563 0L568.779557 454.09881 1048.943259 13.977189z" p-id="13227"></path></svg>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    text: String
  },
  setup(props) {
    const data = reactive({
      iconText: props.text || '更多信息'
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
.sign {
  fill: var(--c-brand);
}
</style>