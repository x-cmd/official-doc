<template>
  <div ref="fullPageRef" class="fullPage">
    <div
      ref="fullPageContainer"
      class="fullPageContainer"
      @mousewheel="mouseWheelHandle"
      @DOMMouseScroll="mouseWheelHandle"
      @touchmove="touchMoveHandle"
      @touchstart="touchStartHandle"
    >
      <div class="section section1">
        <Content @next="next" />
      </div>
      <div class="section section2">
        <Demo :page-index="fullpage.current" @next="next" />
      </div>
      <div class="section section3">
        <div class="cards-group h-4/5 flex flex-col justify-center items-center space-y-5 md:space-x-3 xl:flex-row xl:space-y-0">
          <Card title="增强终端" context="使用X-Cmd的增强命令，操作简单，功能丰富，轻松打造你的最强终端。带你体验终端新世界" />
          <Card title="云脚本" context="X-Cmd提供云脚本存储库，存放的你发布的脚本文件，让你在POSIX Shell环境进行快捷拉取和使用" />
          <Card link link-url="/guide/" link-text="查看详情" title="云管理" context="保证安全性情况下，利用POSIX Shell的兼容能力和轻量化的核心包体积，体验方便快捷的云服务管理" />
        </div>
        <Footer class="m-auto w-3/5" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import Card from "./components/common/Card.vue";
import Footer from "./components/common/Footer.vue";
import Content from "./views/Content.vue";
import Demo from "./views/Demo.vue";

export default {
  components: {
    Content,
    Demo,
    Footer,
    Card
  },
  setup(props) {
    const fullPageRef = ref(null);
    const fullPageContainer = ref(null);
    // data
    const data = reactive({
      pageTotal: 3,
      title: "",
      isShowSideBar: false,
      fullpage: {
        current: 1, // 当前的页面编号
        isScrolling: false, // 是否在滚动,是为了防止滚动多页，需要通过一个变量来控制是否滚动
        deltaY: 0 // 返回鼠标滚轮的垂直滚动量，保存的鼠标滚动事件的deleteY,用来判断是往下还是往上滚
      },
      toggleSidebar: () => {},
      next: () => {}, // 往下切换
      pre: () => {}, // 往上切换
      move: () => {}, // 执行滚动
      directToMove: () => {},
      mouseWheelHandle: () => {},
      touchMoveHandle: () => {},
      touchStartHandle: () => {}
    });

    onMounted(() => {
      data.toggleSidebar = (to) => {
        data.isShowSideBar = typeof to === "boolean" ? to : !data.isShowSideBar;
      };

      data.next = () => {
        const len = data.pageTotal; // 页面的个数
        if (data.fullpage.current + 1 <= len) {
          // 如果当前页面编号+1 小于总个数，则可以执行向下滑动
          data.fullpage.current += 1; // 页面+1
          data.move(data.fullpage.current); // 执行切换
        }
      };

      data.pre = () => {
        if (data.fullpage.current - 1 > 0) {
          // 如果当前页面编号-1 大于0，则可以执行向下滑动
          // 页面-1
          data.fullpage.current -= 1;
          // 执行切换
          data.move(data.fullpage.current);
        }
      };

      data.move = (index) => {
        // 为了防止滚动多页，需要通过一个变量来控制是否滚动
        data.fullpage.isScrolling = true;
        data.directToMove(index);
        // 执行滚动
        setTimeout(() => {
          // 这里的动画是1s执行完，使用setTimeout延迟1s后解锁
          data.fullpage.isScrolling = false;
        }, 1500);
      };

      data.directToMove = (index) => {
        // 获取屏幕的宽度
        let height = fullPageRef._value.clientHeight;
        // 获取执行tarnsform的元素
        let scrollPage = fullPageContainer;
        // 计算滚动的告诉，是往上滚还往下滚
        let scrollHeight;
        scrollHeight = -(index - 1) * height + "px";
        scrollPage._value.style.transform = `translateY(${scrollHeight})`;
        data.fullpage.current = index;
      };

      data.mouseWheelHandle = (event) => {
        // 添加冒泡阻止
        let evt = event || window.event;
        if (evt.stopPropagation) {
          evt.stopPropagation();
        } else {
          evt.returnValue = false;
        }
        if (data.fullpage.isScrolling) {
          // 判断是否可以滚动
          return false;
        }
        let e = event.originalEvent || event;
        // Firefox使用detail
        data.fullpage.deltaY = e.deltaY || e.detail;
        if (data.fullpage.deltaY > 0) {
          data.next();
        } else if (data.fullpage.deltaY < 0) {
          data.pre();
        }
      };

      data.touchStartHandle = (event) => {
        let evt = event || window.event;
        data.deltaY = evt.touches[0].pageY;
      };

      data.touchMoveHandle = (event) => {
        // 添加冒泡阻止
        let evt = event || window.event;
        if (evt.stopPropagation) {
          evt.stopPropagation();
        } else {
          evt.returnValue = false;
        }
        if (data.fullpage.isScrolling) {
          // 判断是否可以滚动
          return false;
        }
        let e = event.originalEvent || event;
        // Firefox使用detail
        const moveEndY = e.changedTouches[0].pageY;
        if (Math.abs(moveEndY) < Math.abs(data.deltaY)) {
          data.next();
        } else if (Math.abs(moveEndY) > Math.abs(data.deltaY)) {
          data.pre();
        }
      };
    });

    const refData = toRefs(data);
    return {
      fullPageRef,
      fullPageContainer,
      ...refData
    };
  }
};
</script>

<style lang="scss" scoped>
.fullPage {
  height: calc(100vh - 3.8rem); //一定要设置，保证占满
  overflow: hidden; //一定要设置，多余的先隐藏
  background-color: var(--c-bg);
}
.fullPageContainer {
  width: 100%;
  height: 100%;
  transition: all linear 0.5s;
}
.section {
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
.dark .section {
  background-image: none;
}
</style>
