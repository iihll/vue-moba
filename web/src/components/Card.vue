<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex ai-center" :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i class="iconfont fs-xl" :class="icon"></i>
      <div class="fs-xl flex-1 px-2">
        <strong>{{ title }}</strong>
      </div>
      <i class="iconfont icon-menu fs-xl" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    plain: { type: Boolean }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/varibles";
.card {
  border-bottom: 1px solid $border-color;
}
</style>
