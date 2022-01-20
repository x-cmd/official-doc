<template>
  <DownloadLink />
  <Terminal type="home-terminal" />
  <footer class="footer">
    <div class="icons">
      <a target="_blank" href="https://github.com/x-cmd/x-cmd">
        <VIcon title="Github" label="Github" name="github" />
      </a>
      <a target="_blank" href="https://gitee.com/x-cmd/x-cmd">
        <VIcon title="Gitee" label="Gitee" name="gitee" />
      </a>
      <a target="_blank" href="mailto:official@x-cmd.com">
        <VIcon title="Email" label="Email" name="email" />
      </a>
    </div>
    <div class="copyright">
      <span>GPL 3.0 Licensed | Copyright &copy; 2021-2022 Li Junhao |&nbsp;</span>
      <span>
        <a target="_blank" href="https://beian.miit.gov.cn/"> 粤ICP备2021166893号-1 </a>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import DownloadLink from "../DownloadLink.vue";
import Terminal from "../Terminal.vue";
</script>
<style lang="scss" scoped></style>
