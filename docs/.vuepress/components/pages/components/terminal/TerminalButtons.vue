<template>
  <div class="flex space-x-2 pb-4">
    <button v-for="(demoInfo, index) in demoInfos" :key="index"
    class="btn rounded-full py-3 px-6" :class="{active: activeIndex === index}" @click="change(index)">{{demoInfo.textBtn}}</button>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  props: {
    demoInfos: Object
  },
  setup(props, context) {
    const data = reactive({
      activeIndex : 0,
      change: () => {}
    });
    onMounted(() => {
      data.change = (index) => {
        data.activeIndex = index;
        context.emit('active', index);
      }
    })
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
    cursor: pointer;
    color: var(--c-brand);
    background-color: var(--c-bg);
    border-color: var(--c-brand);
    display: inline-block;
    font-size: 1.2rem;
    border-width: 2px;
    border-style: solid;
    transition: background-color .1s ease;
    box-sizing: border-box;
    &.active{
      color: var(--c-bg);
      background-color: var(--c-brand-light);
    }
}
.btn:hover{
    color: var(--c-bg);
    background-color: var(--c-brand-light);
}
</style>