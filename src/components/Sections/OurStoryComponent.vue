<template>
  <div>
    <h4 class="title is-4 has-text-centered" v-text="trans('our_story')"></h4>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary" v-text="trans('timeline_begin')" />
      </header>
      <story-card v-for="(story, index) in stories" :key="index" :story="story">
        
      </story-card>
      <header class="timeline-header">
        <span class="tag is-medium is-primary" v-text="`...`" />
      </header>
    </div>
  </div>
</template>

<script>
import { transMixin } from "@/core/lang";
import Constants from "@/core/constants";
export default {
  mixins: [transMixin],
  name: "OurStoryComponent",
  components: { StoryCard: () => import("./Partials/StoryCard") },
  data() {
    return {
      stories: Constants.STORY
    };
  }
};
</script>

<style scoped lang="scss">
  .no-background{
    background-color: transparent !important;
  }
</style>