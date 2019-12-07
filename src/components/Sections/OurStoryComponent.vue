<template>
  <div>
    <h4 class="title is-4 has-text-centered" v-text="trans('our_story')"></h4>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary" v-text="trans('timeline_beging')" />
      </header>
      <!-- <header class="timeline-header" v-for="year in groupedStories" :key="year">
        <span class="tag is-primary" v-text="year"></span>
      </header>  -->
      <story-card v-for="(story, index) in stories" :key="index" :story="story">
        
      </story-card>
      <header class="timeline-header">
        <span class="tag is-medium is-primary" v-text="trans('timeline_end')" />
      </header>
    </div>
  </div>
</template>

<script>
import { transMixin } from "../../core/lang";
import StoryCard from "./Partials/StoryCard";
import Constants from "../../core/constants";
import collect from "collect.js";
export default {
  mixins: [transMixin],
  name: "OurStoryComponent",
  components: { StoryCard },
  data() {
    return {
      stories: Constants.STORY
    };
  },
  computed:{
    groupedStories(){
      return collect(this.stories).groupBy((e) => {
        return e.date.format('YYYY');
      })
    }
  }
};
</script>

<style scoped lang="scss">

</style>