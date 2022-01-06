<template>
  <div class="card px-6 py-3 rounded-md m-0.5 w-3/4 xl:w-1/5 xl:h-1/3">
    <h3 class="title">{{title}}</h3>
    <div class="context">{{context}}</div>
    <div class="link  overflow-hidden" v-if="link">
      <router-link :to="linkUrl" class="float-right">
        {{linkText}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  props: {
    title: String,
    context: String,
    link: Boolean,
    linkText: String,
    linkUrl: String
  },
  setup(props) {
    const data = reactive({
      title: '',
      context: '',
      linkText: '',
      linkUrl: '',
      link: false
    });
    onMounted(() => {
      data.title = props.title;
      data.context = props.context;
      data.link = props.link;
      data.linkText = props.linkText;
      data.linkUrl = props.linkUrl;
    })
    return {
      ...data,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  color: var(--c-text-light);
  background: var(--c-bg-lightest);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  .title {
    color: var(--c-text);
  }
}
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