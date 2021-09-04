<template>
  <div class="h-full flex flex-col justify-around items-center space-y-5  md:space-y-10">
    <h3 class="demo-title m-0 pt-3 lg:text-4xl">
      <span class="text-green-500 lg:text-3xl">→</span> {{titleText}}
    </h3>
    <h4 class="demo-describe m-0 pt-0 text-sm md:text-base text-gray-500">
      {{describeText}}
      <router-link :to="link">
        查看更多
        <svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" ariaHidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
      </router-link>
    </h4>
    <Terminal :titleText="titleText" :terminalInfos="terminalInfo" :activeIndex="activeIndex" :pageIndex="pageIndex" class="flex-1" />
    <TerminalButtons :demoInfos="demoInfos" @active="active" />
    <DownSign text="更多信息" @next="$emit('next')" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { DEMO_INFO } from '../../tools';
import Terminal from "../components/terminal/Terminal.vue";
import TerminalButtons from "../components/terminal/TerminalButtons.vue";
import DownSign from "../components/common/DownSign.vue";

export default {
  props: {
    pageIndex: Number,
  },
  components: {
    Terminal,
    TerminalButtons,
    DownSign
  },
  setup(props) {
    const data = reactive({
      demoInfos: DEMO_INFO,
      activeIndex: 0,
      link: '',
      titleText: '',
      describeText: '',
      terminalInfo: null,
      active: () => {}
    });
    onMounted(() => {
      data.active = (index) => {
        data.activeIndex = index
        data.titleText = data.demoInfos[index].title
        data.link = data.demoInfos[index].link
        data.describeText = data.demoInfos[index].describe
        data.terminalInfo = data.demoInfos[index].terminalInfo
      }
      data.active(0);
    })
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 2.5rem;
  text-align: center;
}
.outbound {
  fill: var(--c-brand)
}
</style>
