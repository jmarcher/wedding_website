<template>
  <div
    class="tile is-child box"
    :style="cardStyle"
    @mouseover="startImageTransition"
    @mouseleave="stopImageTransition"
  >
    <p class="title has-text-light" v-text="trans(this.tip.key)"></p>
    <p v-html="trans(`${this.tip.key}_description`)" class="tile-text has-text-light" v-visible="this.timer"></p>
  </div>
</template>

<script>
import { transMixin } from "../../../core/lang";
export default {
  name: "Tip",
  props: ["tip"],
  mixins: [transMixin],
  data() {
    return {
      cardStyle: `background-image:url(${this.tip.images[0]})`,
      timer: null
    };
  },
  methods: {
    startImageTransition() {
      if (!this.timer) {
        if (this.tip.images.length > 1) {
          let index = 1;
          this.timer = setInterval(() => {
            this.cardStyle = `background-image:url(${this.tip.images[index]})`;
            index++;
            if (index >= this.tip.images.length) {
              index = 0;
            }
          }, 3000);
        }
      }
    },
    stopImageTransition() {
      this.cardStyle = `background-image:url(${this.tip.images[0]})`;
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scoped>
div.tile {
  transition: background-image 0.5s ease;
  background-size: cover;
  background-repeat: no-repeat;
}
p.title {
  text-shadow: 2px 2px 2px #777;
}
p.tile-text {
  text-shadow: 1px 1px 1px #777;
}
</style>