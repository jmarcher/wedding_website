<template>
  <div>
    <!-- <countdown-component></countdown-component> -->
    <div class="columns">
      <div class="column">
        <hotels-component></hotels-component>
      </div>
      <div class="column">
        <h4 class="title is-4" v-text="trans('venue_location')"></h4>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1RFIUtX3ItYetnPGEZSrci0hbm4DWMqXZ"
          class="box map is-paddingless"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { transMixin } from "@/core/lang";
export default {
  name: "VenueComponent",
  mixins: [transMixin],
  components: { HotelsComponent: () => import("./HotelsComponent") }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>