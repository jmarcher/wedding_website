<template>
  <section
    class="hero is-fullheight bd-index-fullscreen content-section"
    data-step="a"
    :class="{
        'has-background-white-bis': this.position%2 === 0, 'has-background-white-ter':this.position%2 !== 0
        }"
  >
    <div class="hero-head">
      <div class="container">
        <h1 class="title has-text-grey-dark has-text-centered" :id="this.$vnode.key">
          <span v-html="trans(`section_title_${this.$vnode.key}`)"></span>
        </h1>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div>
          <slot name="header"></slot>
        </div>
        <div class="separator">
          <br />
        </div>
        <div>
          <slot></slot>
        </div>
        <div class="separator">
          <br />
        </div>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <a class="button is-pulled-right is-primary is-outlined is-rounded" href="#main_app">
        <font-awesome-icon icon="angle-up" class="is-pulled-right"></font-awesome-icon>
      </a>
    </div>
  </section>
</template>

<script>
import { transMixin } from "../../core/lang";
export default {
  props: ["section", "position"],
  name: "SectionPartial",
  mixins: [transMixin]
};
</script>

<style scoped>
.hero-head .title {
  padding-top: 3.5rem;
}
.hero-foot .button {
  margin-bottom: 1rem;
}
</style>