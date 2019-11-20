<template>
  <div>
    <countdown-component></countdown-component>
    <div class="columns">
      <div class="column">
        <hotels-component></hotels-component>
      </div>
      <div class="column">
        <h4 class="title is-4" v-text="trans('venue_location')"></h4>
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13105.328115221739!2d-56.019083!3d-34.7975876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1f5f7f60603c9ba!2sFinca%20%22Clara%22%2C%20chacra%20de%20fiestas%20y%20eventos!5e0!3m2!1sde!2sde!4v1574102074260!5m2!1sde!2sde"
          frameborder="0"
          class="box map is-paddingless"
          style="border:0;"
        ></iframe>-->
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1RFIUtX3ItYetnPGEZSrci0hbm4DWMqXZ"
          class="box map is-paddingless"
          allowfullscreen
        ></iframe>
        <!-- <GmapMap
          :center="center"
          :zoom="10"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            :icon="{url:'./assets/icons/marker_red.png'}"
            @click="center=m.position"
          />
        </GmapMap>-->
      </div>
    </div>
  </div>
</template>

<script>
import HotelsComponent from "./HotelsComponent";
import { transMixin } from "../../core/lang";
import Constants from "../../core/constants";
export default {
  name: "VenueComponent",
  mixins: [transMixin],
  components: { HotelsComponent },
  // data() {
  //   return {
  //     markers: [],
  //     center: Constants.MAP_CENTER.position
  //   };
  // },
  // created() {
  //   this.markers = Constants.HOTELS.map(hotel => {
  //     return hotel.location;
  //   });
  //   this.markers.push(Constants.VENUE.location);
  // }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>