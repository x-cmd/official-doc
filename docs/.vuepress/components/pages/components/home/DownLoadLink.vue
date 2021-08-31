<template>
  <div class="mx-auto xl:w-6/12 lg:w-8/12 md:10/12 w-11/12">
    <h3 class="text-base md:text-2xl mb-1">马上安装</h3>
    <div class="flex home hero items-center space-y-0 flex-col xl:flex-row md:space-y-4 md:space-x-6">
      <CodeGroup class="text-sm lg:text-2xl md:text-3xl sm:text-lx w-full">
        <CodeGroupItem title="Shell">
          <p class="link py-3 px-2 rounded-b-lg flex items-center">
            <span class="select-none symbol font-black text-xl mr-2">></span>
            <code><span class="text-green-500">eval</span><span class="text-yellow-600"> '$(curl https://get.x-cmd.com)'</span></code>
            <button class="float-right outline-none border-none bg-transparent" title="copy" type="button" @click="copy">
              <svg v-show="!isClickCopy" class="text-white w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 00-6-6H102a6 6 0 00-6 6v20a6 6 0 006 6h180a6 6 0 006-6z"></path></svg>
              <svg v-show="isClickCopy" class="icon text-green-500 w-4 h-4 cursor-default" t="1628132348633" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1994" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6CCF00" p-id="1995"></path><path d="M461.23008 602.5216l275.1488-275.1488 72.3968 72.41728-347.5456 347.5456L215.04 501.17632l72.40704-72.41728z" fill="#FFFFFF" p-id="1996"></path></svg>
            </button>
          </p>
        </CodeGroupItem>
      </CodeGroup>
      <!-- <p class="md:text-3xl text-md">or</p>
      <div class=" lg:text-2xl md:text-4xl text-md">
        <a
          class="nav-link action-button secondary"
          href="https://github.com/"
          >安装包下载</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import useClipboard from "vue-clipboard3";

export default {
  setup(props) {
    const data = reactive({
      isClickCopy: false,
      copy: () => {},
    });
    const refData = toRefs(data);
    const { toClipboard } = useClipboard();

    onMounted(() => {
      data.copy = async () => {
        try {
          await toClipboard(`eval '$(curl https://get.x-cmd.com)'`);
          data.isClickCopy = true;
          setTimeout(() => {
            data.isClickCopy = false;
          }, 500);
        } catch (e) {
          console.error(e);
        }
      };
    });
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 419px) {
  :deep .code-group__nav {
    margin-left: 0rem;
    margin-right: 0rem;
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
