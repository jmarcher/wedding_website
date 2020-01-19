<template>
  <div
    class="box is-radiusless-mobile"
    :style="cardStyle"
    
    @mouseover="startImageTransition"
    @mouseleave="stopImageTransition"
  >

    <!-- v-touch:swipe.right="rightPicture" -->
    <!-- v-touch:swipe.left="leftPicture" -->
    <p class="title has-text-light">{{ trans(tip.key) }} <font-awesome-icon icon="certificate" class="has-text-light is-size-5" v-if="this.tip.isBestTip" /></p>
    <h6 class="subtitle has-text-light is-6" v-if="show_city" v-text="trans(this.tip.city)"></h6>
    
    <p
      v-html="trans(`${this.tip.key}_description`)"
      class="tile-text has-text-light"
      v-visible="this.timer"
    ></p>
    <p class="links buttons" v-visible="this.timer">
      <a v-if="wikipediaLink" :href="wikipediaLink" target="_blank" class="button">
        <font-awesome-icon :icon="['fab', 'wikipedia-w']" />
      </a>
      <a v-if="googleMapsLink" :href="googleMapsLink" target="_blank" class="button">
        <font-awesome-icon :icon="['fas', 'map-marked-alt']" />
      </a>
    </p>
  </div>
</template>

<script>
import Constants from "@/core/constants";
import { transMixin } from "@/core/lang";

export default {
  name: "Tip",
  props: ["tip", "show_city"],
  mixins: [transMixin],
  data() {
    return {
      actualPictureIndex: 0,
      timer: null,
    };
  },
  created() {
    this.preloadImages();
  },
  computed: {
    wikipediaLink() {
      if (this.tip.links[`wikipedia_${this.get_locale}`]) {
        return this.tip.links[`wikipedia_${this.get_locale}`];
      }

      return false;
    },
    googleMapsLink() {
      return this.tip.links["gmaps"];
    },
    actualPicture() {
      if (this.tip.images && this.tip.images.length > 0) {
        return this.tip.images[this.actualPictureIndex];
      }
      return Constants.IMAGE_PLACEHOLDER;
    },
    cardStyle() {
      return `background-image:url(${this.actualPicture})`;
    }
  },
  methods: {

    leftPicture() {
      if (this.actualPictureIndex >= this.tip.images.length - 1) {
        this.actualPictureIndex = 0;
      } else {
        this.actualPictureIndex++;
      }
    },
    rightPicture() {
      if (this.actualPictureIndex === 0) {
        this.actualPictureIndex = this.tip.images.length - 1;
      } else {
        this.actualPictureIndex--;
      }
    },
    startImageTransition() {
      if (!this.timer) {
        if (this.tip.images.length > 1) {
          this.timer = setInterval(this.leftPicture, 2000);
        } else {
          this.timer = true;
        }
      }
    },
    preloadImages() {},
    stopImageTransition() {
      this.actualPictureIndex = 0;
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scoped>
div.box {
  transition: background 0.5s ease;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  cursor: pointer;
}

p.title {
  text-shadow: 2px 2px 2px #3d3d3d;
}

h6.subtitle {
  text-shadow: 2px 2px 2px #3d3d3d;
}

p.tile-text {
  text-shadow: 1px 1px 1px #3d3d3d;
}
</style>