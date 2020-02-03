<template>
  <div class="timeline-item">
    <div
      class="timeline-marker is-icon"
      :class="{'special-icon is-paddingless': story.icon_special}"
    >
      <img :src="story.icon" v-if="story.icon_special" class="image is-32x32" />
      <font-awesome-icon :icon="['fas', story.icon]" v-if="!story.icon_special"></font-awesome-icon>
    </div>
    <story-card-partial :story="story"></story-card-partial>
  </div>
</template>

<script>
// import StoryCardPartial from "./StoryCardPartial";
import moment from "moment";
export default {
  props: ["story"],
  components: { StoryCardPartial: () => import("./StoryCardPartial") },
  computed: {
    storyYear() {
      // const { default: moment } = await import(
      //   /* webpackChunkName: "moment" */ "moment"
      // );
      return moment(this.story.date, "YYYY-MM-DD").format("YYYY");
    }
  }
};
</script>