<template>
  <div class="card" :class="`card-${position}`">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong v-text="trans(story.key)"></strong>
              <small v-text="formattedDate"></small>
            </p>
            <!-- <p v-text="trans(`${story.key}_description`)"> </p> -->
          </div>
        </div>
      </div>
      <!-- <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
      </div> -->
    </div>
        <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
  </div>
</template>

<script>
import { transMixin } from "../../../core/lang";
export default {
  props: ["story", "position"],
  mixins: [transMixin],
  computed: {
    formattedDate() {
      return this.story.date.format("D.M.YYYY");
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  &-right {
    &::before {
      content: " ";
      border: 1.5px solid #dedede;
      position: absolute;
      left: -13px;
      width: 13px;
      display: inline-block;
    }
    &::after {
      content: " ";
      border: 5px solid #dedede;
      position: absolute;
      left: -17px;
      top: -3px;
      border-radius: 50%;
    }
  }
  &-left {
    &::before {
      content: " ";
      border: 1.5px solid #dedede;
      position: absolute;
      right: -13px;
      width: 13px;
      display: inline-block;
    }
    &::after {
      content: " ";
      border: 5px solid #dedede;
      position: absolute;
      right: -17px;
      top: -3px;
      border-radius: 50%;
    }
  }
}
</style>