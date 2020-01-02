<template>
  <div>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-size-4">Joaquín</p>
          <rounded-image src="./assets/images/pic-groom.jpg" :size="210"></rounded-image>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-size-4">Rebecca</p>
          <rounded-image src="./assets/images/pic-bride.jpg" :size="210"></rounded-image>
        </div>
      </div>
    </nav>
    <div class="content is-text-highlighted" v-html="trans('about_us_intro')">
    </div>
    <div class="separator"><br><br><br></div>
    <our-story-component></our-story-component>
  </div>
</template>

<script>
import RoundedImage from "./Partials/RoundedImage";
import OurStoryComponent from './OurStoryComponent';
import { transMixin} from '@/core/lang';
export default {
  name: "AboutUsComponent",
  components: { RoundedImage, OurStoryComponent },
  mixins:[transMixin],
};
</script>

<style scoped>
</style>