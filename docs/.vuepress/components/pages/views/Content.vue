<template>
  <div class="flex flex-col h-full justify-around">
    <div
      class="inner flex mx-auto mt-4 md:max-w-screen-lg md:flex-row md:justify-center md:items-center md:text-left md:space-x-10 lg:space-x-28 flex-col text-center"
    >
      <div class="left">
        <img class="md:w-60 lg:w-80 w-28" src="/images/logo.png" alt="X-Cmd" />
      </div>
      <div class="right">
        <h1 class="text-center text-2xl md:text-6xl">X-Cmd</h1>
        <h2 class="description border-0 text-base md:text-2xl">
          轻量级、跨平台，功能强大的终端插件 <br />
          让终端有无限可能！
        </h2>
        <div class="actions hero w-36 md:w-40 overflow-hidden">
          <router-link class="nav-link action-button primary" to="/guide/start.html">快速上手 →</router-link>
        </div>
      </div>
    </div>
    <DownLoadLink />
    <DownSign text="查看示例" @next="$emit('next')" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import DownLoadLink from "../components/home/DownLoadLink.vue";
import DownSign from "../components/common/DownSign.vue";

export default {
  components: {
    DownLoadLink,
    DownSign,
  },
  setup(props) {
    const data = reactive({});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: var(--c-text-lightest);
}
@media (min-width: 1024px) {
  .home .hero .action-button {
  font-size: 1.2rem;
  }
}
@media (max-width: 1024px) {
  .home .hero .action-button {
  font-size: 1rem;
}
}
</style>
