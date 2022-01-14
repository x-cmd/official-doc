<template>
  <div ref="downLoadLinksRef" class="code-group downLoadLink-group">
    <CodeGroup>
      <CodeGroupItem title="Shell" class="language-bash">
        <p class="downLoadLink-link">
          <span class="downLoadLink-symbol term-green">❯</span>
          <code class="pre-bash downLoadLink-code"
            ><span class="term-green">eval</span
            ><span class="term-yellow"> "$(curl https://get.x-cmd.com)"</span></code
          >
        </p>
        <CodeCopy
          v-if="isVisible"
          :parent="downLoadLinksRef"
          :options="codeCopyOption.options"
          :code="codeCopyText"
        />
      </CodeGroupItem>
    </CodeGroup>
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
:deep(.code-copy) {
  .top {
    top: auto;
    bottom: 0.4rem;
  }
}
</style>
