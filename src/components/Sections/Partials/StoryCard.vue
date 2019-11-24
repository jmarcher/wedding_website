<template>
  <div class="columns">
    <div class="column is-one-tenth">&nbsp;</div>
    <div class="column is-two-fifths">
      <story-card-partial :story="story" :position="position" v-if="position === 'left'"></story-card-partial>
    </div>
    <div class="column is-two-fifths">
      <story-card-partial :story="story" :position="position" v-if="position === 'right'"></story-card-partial>
    </div>
    <div class="column is-one-tenth">&nbsp;</div>
  </div>
</template>

<script>
import StoryCardPartial from "./StoryCardPartial";
export default {
  props: ["story"],
  components: { StoryCardPartial },
  data() {
    return {
      position: this.$vnode.key % 2 === 0 ? "left" : "right"
    };
  }
};
</script>

<style scoped>
.is-two-tenth {
  flex: none;
  width: 10%;
}
</style>