<template>
  <div>
    Sección de:
    <span v-text="this.country"></span>
    <h3 class="title is-3">{{ trans('tips') }}</h3>
    <div class="tile is-ancestor">
      <div class="tile is-8 is-parent">
        <tip :tip="tips[0]" :key="tips[0].key"></tip>
      </div>
      <div class="tile is-4 is-vertical is-parent">
        <tip :tip="tips[1]" :key="tips[1].key"></tip>
        <tip :tip="tips[2]" :key="tips[2].key"></tip>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <tip :tip="tips[3]" :key="tips[3].key"></tip>
        <tip :tip="tips[4]" :key="tips[4].key"></tip>
      </div>
      <div class="tile is-8 is-parent">
        <tip :tip="tips[5]" :key="tips[5].key"></tip>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from "../../core/constants";
import { transMixin } from "../../core/lang";
import Tip from "./Partials/Tip";

export default {
  props: ["country"],
  mixins: [transMixin],
  components: { Tip },
  data() {
    return {
      data: Constants.SECTIONS[`what_to_do_in_${this.country}`],
      tips: this.shuffle(
        Constants.SECTIONS[`what_to_do_in_${this.country}`].location_tips
      )
    };
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
};
</script>

<style scoped>
</style>