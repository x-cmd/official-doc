<template>
  <div class="mx-auto xl:w-6/12 lg:w-8/12 md:10/12 w-11/12">
    <h3 class="text-base md:text-2xl mb-1">马上安装</h3>
    <div class="flex home hero items-center space-y-0 flex-col xl:flex-row md:space-y-4 md:space-x-6">
      <CodeGroup class="text-sm lg:text-2xl md:text-3xl sm:text-lx w-full">
        <CodeGroupItem title="Shell" class="language-bash">
          <p class="link py-3 px-2 mx-2 rounded-b-lg flex items-center">
            <span class="select-none symbol font-black text-xl mr-2">></span>
            <code class="pre-bash"><span class="text-green-500">eval</span><span class="text-yellow-600"> "$(curl https://get.x-cmd.com)"</span></code>
          </p>
        </CodeGroupItem>
      </CodeGroup>
    </div>
  </div>
</template>

<script>
// import { reactive, toRefs, onMounted } from "vue";
export default {
  setup(props) {
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 419px) {
  :deep(.code-group__nav) {
    margin-left: 0rem;
    margin-right: 0rem;
    border-radius: 6px;
  }
  :deep(div[class*=language-]){
    margin: 0;
    border-radius: 6px;
  }
}
.theme-container.custom-page-class .home {
  padding: 0;
}
.home .hero{
  text-align: left;
}
.symbol {
  color: var(--c-brand-light);
}
code {
  background: none;
  color: #fff;
}
.link {
  background: var(--code-bg-color);
}
.dark {
  code {
    color: #fff;
  }
}
</style>
