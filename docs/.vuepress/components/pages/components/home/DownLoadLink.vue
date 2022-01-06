<template>
  <div class="home-download mx-auto xl:w-6/12 lg:w-8/12 md:10/12 w-11/12">
    <h3 class="text-base md:text-2xl mb-1">马上安装</h3>
    <div ref="downLoadLinksRef" class="flex home hero items-center space-y-0 flex-col xl:flex-row md:space-y-4 md:space-x-6">
      <CodeGroup ref="downLoadLinksRef" class="text-sm lg:text-2xl md:text-3xl sm:text-lx w-full">
        <CodeGroupItem title="Shell" class="language-bash">
          <p class="py-3 px-2 mx-2 rounded-b-lg flex items-center">
            <span class="select-none text-green-500 font-black md:text-xl text-base md:mr-2 mr-1">></span>
            <code class="pre-bash bg-transparent"><span class="text-green-500">eval</span><span class="text-yellow-600"> "$(curl https://get.x-cmd.com)"</span></code>
          </p>
          <CodeCopy v-if="isVisible" :parent="downLoadLinksRef" :options="codeCopyOption.options" :code="codeCopyText" />
        </CodeGroupItem>
      </CodeGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const downLoadLinksRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const codeCopyOption = {
  parent: null as HTMLElement | null,
  options: {
    align: "top",
    color: "var(--c-brand)",
    backgroundTransition: false,
    backgroundTransitionColor: "var(--code-bg-color)",
    successText: "Copied!",
    successTextColor: "var(--c-brand-light)",
    staticIcon: true
  }
};
const codeCopyText = 'eval "$(curl https://get.x-cmd.com)"';
onMounted(() => {
  codeCopyOption.parent = downLoadLinksRef.value;
  isVisible.value = true;
});
</script>

<style lang="scss" scoped>
.home-download {
  :deep(.code-copy) {
    .top {
      top: auto;
      bottom: 1.4rem;
    }
  }
  :deep(.code-group__nav) {
    text-align: left;
  }
  .code-group {
    box-shadow: none;
  }
}
</style>
