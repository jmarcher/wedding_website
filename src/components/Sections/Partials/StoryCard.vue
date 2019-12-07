<template>
    <div class="timeline-item">
      <div class="timeline-marker is-icon">
        <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
      </div>
      <story-card-partial :story="story"></story-card-partial>
    </div>
</template>

<script>
import StoryCardPartial from "./StoryCardPartial";
export default {
  props: ["story"],
  components: { StoryCardPartial },
  computed:{
    storyYear(){
      return this.story.date.format("YYYY");
    }
  }
};
</script>