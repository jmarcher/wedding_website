<template>
  <div>
    <h4 class="title is-4 has-text-centered" v-text="trans('our_story')"></h4>
    <div class="timeline">
      <story-card v-for="(story, index) in stories" :key="index" :story="story"></story-card>
    </div>
  </div>
</template>

<script>
import { transMixin } from "../../core/lang";
import StoryCard from "./Partials/StoryCard";
import Constants from "../../core/constants";
export default {
  mixins: [transMixin],
  name: "OurStoryComponent",
  components: { StoryCard },
  data() {
    return {
      stories: Constants.STORY
    };
  }
};
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  &::before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: rgba(0, 0, 0, 0.09);
    left: 50%;
    margin-left: -1.5px;
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    border-radius: 1rem;
  }
}
</style>