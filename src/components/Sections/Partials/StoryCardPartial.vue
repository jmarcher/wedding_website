<template>
  <div class="timeline-content">
    <p class="heading" v-text="formattedDate"></p>
    <p v-text="trans(story.key)"></p>
    <p v-text="trans(story.location)" class="is-size-7"></p>
  </div>
</template>

<script>
import { transMixin } from "../../../core/lang";
export default {
  props: ["story"],
  mixins: [transMixin],
  computed: {
    formattedDate() {
      return this.story.date.format("D.M.YYYY");
    }
  }
};
</script>
